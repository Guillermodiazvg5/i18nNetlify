import ConfirmOtpContainer from '@mitimiti/components/auth/validate-otp/confirm-otp-container';
import {
  json,
  redirect,
  type LoaderFunction,
  type MetaFunction,
} from '@remix-run/node';
import { action } from '@mitimiti/routes/cuenta.verificacion/actions/verificacion.action';
import { mitimitiCookiePref } from '@mitimiti/lib/cookies.server';
import { getSession } from '@mitimiti/services/session.services';
import { getUser } from '@mitimiti/services/user.services';

export const meta: MetaFunction = () => {
  return [
    { title: 'Verificar Mitimiti App' },
    { name: 'description', content: 'Mitimiti App' },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const { session, headers } = await getSession(request);
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await mitimitiCookiePref.parse(cookieHeader)) || {};
  const sid = cookie.sid || '';

  if (!session) return redirect('/cuenta/login', { headers });

  const response = new Response();
  const user = await getUser({
    request,
    response,
    userUid: session?.user?.id || '',
  });

  if (user && user.phone) return redirect('/pasajero', { headers });

  return json({ sid });
};

export { action };

export default function DriverRouter() {
  return <ConfirmOtpContainer />;
}
