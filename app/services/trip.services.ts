import { clientSupabaseServer } from '@mitimiti/lib/supabase.server';
import { DbTrip, Trip } from '@mitimiti/types/trip';
import { SupabaseClient } from '@supabase/supabase-js';

export const getTrips = async ({
  request,
}: {
  request: Request;
  response: Response;
}): Promise<Trip[]> => {
  const { supabaseClient } = clientSupabaseServer(request);
  const { data, error } = await supabaseClient
    .from('trip')
    .select(
      `
      id,
      driver_uid,
      available_seats,
      posted_seats,
      cost_per_seat,
      from_trip,
      to_trip,
      date_trip,
      trip_description,
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
  const trips: Trip[] = data.map((trip) => {
    return {
      id: trip.id,
      date: new Date(trip.date_trip).toISOString(),
      user: {
        avatar: trip?.user?.profile_picture ?? '',
        name: trip?.user?.name ?? '',
      },
      trip: {
        startLocation: trip.from_trip,
        finishLocation: trip.to_trip,
        hourStart: trip.date_trip,
        hourFinish: trip.date_trip,
        numberOfPassengers: trip.available_seats,
      },
    };
  });

  return trips;
};

export const createTrip = async (
  supabaseClient: SupabaseClient,
  trip: DbTrip
) => await supabaseClient.from('trip').insert(trip);
