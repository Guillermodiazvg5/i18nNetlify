import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from '@remix-run/node';

import { getPostsPassengers } from '@mitimiti/services/post.services';
import DriverPage from '@mitimiti/pages/driver';
import { action } from '@mitimiti/routes/_home.conductores/action';
import { ResponseLoader } from '@mitimiti/types/response';
import { LoaderResponse } from '@mitimiti/types/drivers';
import { mitimitiCookiePref } from '@mitimiti/lib/cookies.server';
import { isRouteErrorResponse, useRouteError } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'MitiMiti App' },
    { name: 'Conductor', content: 'Mitimiti App' },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const response = new Response();
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await mitimitiCookiePref.parse(cookieHeader)) || {};

  return json<ResponseLoader<LoaderResponse>>({
    type: 'success',
    errorMessage: null,
    data: {
      postsPassengers: await getPostsPassengers({ request, response }),
      pendingTrip: cookie.pendingTrip ?? null,
    },
  });
}

export { action };

export default function Driver() {
  return <DriverPage />;
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
