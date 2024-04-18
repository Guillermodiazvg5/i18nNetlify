import Login from '@mitimiti/pages/login';
import {
  LoaderFunctionArgs,
  json,
  type MetaFunction,
  redirect,
} from '@remix-run/node';
import { action } from '@mitimiti/routes/cuenta.$type/actions/login.action';
import {
  getCookiesPreference,
  mitimitiCookiePref,
} from '@mitimiti/lib/cookies.server';
import { getSession } from '@mitimiti/services/session.services';
import { getUser } from '@mitimiti/services/user.services';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Login Mitimiti App' },
    { name: 'Iniciar sesión', content: 'Mitimiti App' },
  ];
};

export async function loader({ request, params }: LoaderFunctionArgs) {
  const { session, headers } = await getSession(request);

  const { searchParams } = new URL(request.url);
  const callback = searchParams.get('callback');

  const cookiesPreference = await getCookiesPreference(request);
  cookiesPreference.callback = callback;

  if (session) {
    const response = new Response();
    const user = await getUser({
      request,
      response,
      userUid: session.user.id,
    });

    if (user && user.phone) {
      return redirect(callback || '/', { headers });
    }
    return redirect('/cuenta/telefono', { headers });
  }

  if (params.type !== 'login' && params.type !== 'registrar') {
    throw new Response('', { status: 404 });
  }

  return json(
    {
      type: params.type,
    },
    {
      headers: {
        'Set-Cookie': await mitimitiCookiePref.serialize(cookiesPreference),
      },
    }
  );
}

export { action };

export default function LoginRouter() {
  const { type } = useLoaderData<typeof loader>();

  return <Login isOnboarding={type === 'registrar'} />;
}
