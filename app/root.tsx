import type { LinksFunction } from '@netlify/remix-runtime';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  json,
  useLoaderData,
  useRouteError,
} from '@remix-run/react';
import stylesheet from './globals.css';
import type { LoaderFunctionArgs } from '@remix-run/node';
import Navbar from '@mitimiti/components/ui/navbar';
import { getSession } from '@mitimiti/services/session.services';
import i18nServer, { localeCookie } from 'app/modules/i18n.server';
import { useChangeLanguage } from 'remix-i18next/react';

export const handle = { i18n: ['translation'] };
import { signOut } from './services/login.services';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
  },
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { session, headers } = await getSession(request);

  return json({ session }, { headers });
};

export const action = async ({ request }: LoaderFunctionArgs) => {
  const { error, headers } = await signOut(request);

  if (error) {
    throw new Error('Error al cerrar sesión');
  }

  return json(
    { message: 'ok' },
    {
      headers,
    }
  );
};

export async function loaderI18n({ request }: LoaderFunctionArgs) {
  const locale = await i18nServer.getLocale(request);
  return json(
    { locale },
    { headers: { 'Set-Cookie': await localeCookie.serialize(locale) } }
  );
}

export default function App({ children }: { children: React.ReactNode }) {
  const { session } = useLoaderData<typeof loader>();

  const { locale } = useLoaderData<typeof loaderI18n>();
  useChangeLanguage(locale);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Navbar
          showOptions={!!session}
          user={{
            avatar: session?.user?.user_metadata?.avatar_url,
            name: session?.user?.user_metadata?.full_name,
          }}
        />
        <Outlet context={{ session }} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
