import {
  getCookiesPreference,
  mitimitiCookiePref,
} from '@mitimiti/lib/cookies.server';
import { clientSupabaseServer } from '@mitimiti/lib/supabase.server';
import { getSession } from '@mitimiti/services/session.services';
import { updateUserPhone } from '@mitimiti/services/user.services';
import {
  sendCodevalidate,
  validate,
} from '@mitimiti/services/verification.services';
import {
  ActionFunctionArgs,
  json,
  redirect,
  type MetaFunction,
} from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Verificar Mitimiti App' },
    { name: 'description', content: 'Mitimiti App' },
  ];
};

type ResponseValidate = {
  status?: number;
  sid?: string;
  error?: string;
  message?: string;
};

export const NAMES_ACTIONS_OTP = {
  validateOTP: 'validateOTP',
  resendCodeOTP: 'resendCodeOTP',
};

const actionsOTP: {
  [key: string]: (
    sid: string,
    numberPhone: string,
    codeValidator: string
  ) => Promise<ResponseValidate>;
} = {
  validateOTP: async (
    sid: string,
    numberPhone: string,
    codeValidator: string
  ) => {
    const response = await validate({
      numberPhone,
      sid,
      codeValidator,
    });
    return response;
  },
  resendCodeOTP: async (sid: string, numberPhone: string) => {
    const response = await sendCodevalidate({
      sid,
      numberPhone,
    });
    return response;
  },
};

export async function action({ request }: ActionFunctionArgs) {
  try {
    const { session } = await getSession(request);
    const { supabaseClient } = clientSupabaseServer(request);

    const cookiesPreference = await getCookiesPreference(request);

    const cookieHeader = request.headers.get('Cookie');
    const cookie = (await mitimitiCookiePref.parse(cookieHeader)) || {};
    const formData = await request.formData();
    const typeAction = formData.get('intent') || '';

    const actionsOTPFunction = actionsOTP[typeAction as string];
    let responseValidate: ResponseValidate | null = null;
    const sid = cookie.sid || '';
    const numberPhone = cookie.phone || '';

    if (!actionsOTPFunction || !sid || !numberPhone || !session?.user?.id) {
      return json({ ok: false, error: 'Error, revisa tu numero celular' });
    }

    responseValidate = await actionsOTPFunction(
      sid,
      numberPhone,
      formData.get('codeValidator')?.toString() || ''
    );

    if (!responseValidate || responseValidate?.status !== 200) {
      return json({
        ok: false,
        error: 'Error, no se puedo verificar el codigo',
      });
    }

    if (typeAction === NAMES_ACTIONS_OTP.resendCodeOTP) {
      return json({ ok: true, error: null });
    }

    const updateUser = await updateUserPhone(
      supabaseClient,
      numberPhone,
      session?.user?.id
    );

    if (updateUser.status !== 200 && updateUser.status !== 204) {
      return json({
        ok: false,
        error:
          updateUser.error || 'Error al actualizar el telefono del usuario',
      });
    }

    return redirect(cookiesPreference.callback || `/`);
  } catch (error) {
    return json({
      ok: false,
      error: 'Ups ! hubo un error al veriicar el codigo',
    });
  }
}
