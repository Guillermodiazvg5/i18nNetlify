import { Database } from '@mitimiti/types/schema';
import { createServerClient, parse, serialize } from '@supabase/ssr';

// TODO: Move this client to a singleton object.
export const clientSupabaseServer = (request: Request) => {
  const cookies = parse(request.headers.get('Cookie') ?? '');
  const headers = new Headers();
  const supabaseClient = createServerClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_KEY!,
    {
      cookies: {
        get(key) {
          return cookies[key];
        },
        set(key, value, options) {
          headers.append('Set-Cookie', serialize(key, value, options));
        },
        remove(key, options) {
          headers.append('Set-Cookie', serialize(key, '', options));
        },
      },
    }
  );
  return { supabaseClient, headers };
};
