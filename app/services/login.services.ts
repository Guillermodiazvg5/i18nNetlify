import { clientSupabaseServer } from '@mitimiti/lib/supabase.server';

export const signInOAuthProvider = async (
  request: Request,
  provider: 'google' | 'facebook'
) => {
  const { supabaseClient, headers } = clientSupabaseServer(request);
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: `${process.env.BASE_URL}/auth/callback`,
    },
  });

  return { data, error, headers };
};

export const signOut = async (request: Request) => {
  const { supabaseClient, headers } = clientSupabaseServer(request);
  const { error } = await supabaseClient.auth.signOut();

  return { error, headers };
};
