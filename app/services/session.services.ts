import { clientSupabaseServer } from '@mitimiti/lib/supabase.server';

export const getSession = async (request: Request) => {
  const { supabaseClient, headers } = clientSupabaseServer(request);
  const session = await supabaseClient.auth.getSession();

  return { session: session.data.session, headers };
};
