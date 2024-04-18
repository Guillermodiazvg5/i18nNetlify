import { mitimitiCookiePref } from '@mitimiti/lib/cookies.server';
import { clientSupabaseServer } from '@mitimiti/lib/supabase.server';
import {
  createUser,
  getUserByEmail,
  updateUserUid,
} from '@mitimiti/services/user.services';
import { redirect, type LoaderFunctionArgs } from '@remix-run/node';

export async function loader({ request }: LoaderFunctionArgs) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await mitimitiCookiePref.parse(cookieHeader)) || {};

  const next = cookie.callback || '/';

  if (!code) {
    return redirect('/auth/auth-error');
  }

  const { supabaseClient, headers } = clientSupabaseServer(request);

  const {
    error,
    data: { session },
  } = await supabaseClient.auth.exchangeCodeForSession(code);

  if (error) {
    return redirect('/auth/auth-error');
  }

  if (!session || !session?.user?.email) {
    return redirect('/auth/auth-error');
  }

  if (!session || !session?.user?.phone) {
    return redirect('/cuenta/telefono', { headers });
  }

  const user = await getUserByEmail(supabaseClient, session?.user?.email);

  // if user not exist create user
  if (user.data?.length === 0) {
    const createUserResponse = await createUser(supabaseClient, session);

    if (createUserResponse.error) {
      return redirect('/auth/auth-error');
    }
  }

  const userExist = user.data ? user.data[0] : null;

  // if user exist update user
  if (userExist && userExist?.user_uid !== session?.user?.id.toString()) {
    const updateUserResponse = await updateUserUid(
      supabaseClient,
      session?.user?.id.toString(),
      userExist.user_uid
    );

    if (updateUserResponse.error) {
      return redirect('/auth/auth-error');
    }
  }

  return redirect(next, { headers });
}
