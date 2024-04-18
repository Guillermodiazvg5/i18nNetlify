import { clientSupabaseServer } from '@mitimiti/lib/supabase.server';
import { User } from '@mitimiti/types/user';
import { Session, SupabaseClient } from '@supabase/supabase-js';

export const getUser = async ({
  request,
  userUid,
}: {
  request: Request;
  response: Response;
  userUid: string;
}): Promise<User | null> => {
  try {
    const { supabaseClient } = clientSupabaseServer(request);
    const { data, error } = await supabaseClient
      .from('user')
      .select(`*`)
      .eq('user_uid', userUid)
      .limit(1);

    if (error || !data || data.length === 0) {
      return null;
    }

    const [userSelected] = data;

    if (!userSelected) {
      return null;
    }

    return {
      userUid: userSelected.user_uid,
      name: userSelected.name,
      phone: userSelected.phone || '',
      email: userSelected.email,
    };
  } catch (error) {
    return null;
  }
};

export const getUserByEmail = async (
  supabaseClient: SupabaseClient,
  email: string
) => {
  const user = await supabaseClient
    .from('user')
    .select('*')
    .filter('email', 'eq', email);

  return user;
};

export const createUser = async (
  supabaseClient: SupabaseClient,
  session: Session
) => {
  const response = await supabaseClient.from('user').insert({
    user_uid: session?.user?.id.toString(),
    email: session?.user.email,
    name: session?.user.user_metadata.full_name,
    profile_picture: session?.user.user_metadata.avatar_url,
  });

  return response;
};

export const updateUserUid = async (
  supabaseClient: SupabaseClient,
  newUserUid: string,
  UserUid: string
) => {
  const response = await supabaseClient
    .from('user')
    .update({ user_uid: newUserUid })
    .eq('user_uid', UserUid);
  return response;
};

export const updateUserPhone = async (
  supabaseClient: SupabaseClient,
  newPhone: string,
  UserUid: string
) => {
  const response = await supabaseClient
    .from('user')
    .update({ phone: newPhone })
    .eq('user_uid', UserUid);
  return response;
};
