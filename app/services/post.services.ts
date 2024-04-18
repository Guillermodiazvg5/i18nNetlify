import { clientSupabaseServer } from '@mitimiti/lib/supabase.server';
import { PostPassenger } from '@mitimiti/types/post';

export const getPostsPassengers = async ({
  request,
}: {
  request: Request;
  response: Response;
}): Promise<PostPassenger[]> => {
  // TODO: Move this client to a singleton object.
  const { supabaseClient } = clientSupabaseServer(request);
  const { data, error } = await supabaseClient
    .from('post')
    .select(
      `
      id,
      passenger_uid,
      from_trip,
      to_trip,
      date_trip,
      asking_seats,
      user (
        user_uid,
        name,
        profile_picture
      )
    `
    )
    .order('created_at', { ascending: false })
    .limit(6);

  if (error) {
    return [];
  }

  // adapter to transform data to internal types
  const posts = data.map((post) => {
    return {
      id: post.id,
      passengerUid: post.passenger_uid,
      fromTrip: post.from_trip,
      toTrip: post.to_trip,
      dateTrip: new Date(post.date_trip).toISOString(),
      askingSeats: post.asking_seats,
      user: post?.user
        ? {
            userUid: post.user.user_uid,
            name: post.user.name,
            profilePicture: post.user.profile_picture,
          }
        : null,
    };
  });

  return posts;
};
