import ValidatePhoneNumberContainer from '@mitimiti/components/auth/validate-otp/confirm-validate-numberphone';
import { getCookiesPreference } from '@mitimiti/lib/cookies.server';
import { getSession } from '@mitimiti/services/session.services';
import { getUser } from '@mitimiti/services/user.services';
import {
  LoaderFunctionArgs,
  json,
  redirect,
  type MetaFunction,
} from '@remix-run/node';
import { action } from '@mitimiti/routes/cuenta.telefono/actions/telefono.action';

export const meta: MetaFunction = () => {
  return [
    { title: 'Telefono Mitimiti App' },
    { name: 'description', content: 'Mitimiti App' },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { session, headers } = await getSession(request);

  const cookiesPreference = await getCookiesPreference(request);

  if (!session) {
    return redirect('/cuenta/login', { headers });
  }

  const response = new Response();
  const user = await getUser({
    request,
    response,
    userUid: session?.user?.id || '',
  });

  if (user && user.phone) {
    return redirect(cookiesPreference.callback || '/', { headers });
  }

  return json({}, { headers });
}

export { action };

export default function ValidateNumberPhone() {
  return <ValidatePhoneNumberContainer />;
}
