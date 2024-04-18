import { mitimitiCookiePref } from '@mitimiti/lib/cookies.server';
import {
  createServiceTwilio,
  sendCodevalidate,
} from '@mitimiti/services/verification.services';
import { ActionFunctionArgs, json, redirect } from '@remix-run/node';

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const numberPhone = `+57${formData.get('phone') as string}`;
  const serviceTwilio = await createServiceTwilio({
    request,
    numberPhone,
  });

  if (!serviceTwilio.sid) {
    return json({ ok: false });
  }

  const codeSend = await sendCodevalidate({
    sid: serviceTwilio?.sid,
    numberPhone,
  });

  if (!codeSend.sid) {
    return json({ ok: false });
  }

  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await mitimitiCookiePref.parse(cookieHeader)) || {};
  cookie.sid = serviceTwilio.sid;
  cookie.phone = numberPhone;
  return redirect(`/cuenta/verificacion`, {
    headers: {
      'Set-Cookie': await mitimitiCookiePref.serialize(cookie),
    },
  });
}
