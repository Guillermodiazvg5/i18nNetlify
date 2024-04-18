import { json, redirect } from '@remix-run/node';
import { tzDate, format } from '@formkit/tempo';

import { mitimitiCookiePref } from '@mitimiti/lib/cookies.server';
import { tripSchema } from '@mitimiti/lib/validator.server';
import { DbTrip, PendingTrip } from '@mitimiti/types/trip';
import { createTrip } from '@mitimiti/services/trip.services';
import { getSession } from '@mitimiti/services/session.services';
import { clientSupabaseServer } from '@mitimiti/lib/supabase.server';

// Getting the form data from the request
export const getObjectFromSearchParams = (url: string): PendingTrip => {
  // Getting the form data from the request
  const { searchParams } = new URL(url);

  const cityFrom = (searchParams.get('city-from') as string) ?? null;
  const cityTo = (searchParams.get('city-to') as string) ?? null;
  const date = (searchParams.get('date') as string) ?? null;
  const seats = (searchParams.get('seats') as string) ?? null;

  return {
    cityFrom,
    cityTo,
    date,
    seats,
  };
};

// Publishing the trip step one
export const publishTripStepOne = async (request: Request) => {
  const { session } = await getSession(request);
  const pendingTrip = getObjectFromSearchParams(request.url);

  // Validating the form with the zod schema
  const validatedForm = tripSchema.safeParse(pendingTrip);

  if (!validatedForm.success) {
    return json({
      result: { success: false, message: 'error' },
      data: null,
      errors: validatedForm?.error?.issues,
    });
  }

  // Saving the pending trip in the cookie
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await mitimitiCookiePref.parse(cookieHeader)) || {};
  cookie.pendingTrip = pendingTrip;

  // If there is session we just return the pending trip
  if (session) {
    console.log('pendingTrip', pendingTrip);
    return json(
      {
        result: { success: true, message: 'ok' },
        data: { pendingTrip },
        errors: null,
      },
      {
        headers: { 'Set-Cookie': await mitimitiCookiePref.serialize(cookie) },
      }
    );
  }

  // If there is no session we redirect to login page and set the cookie
  return redirect('/login?callback=/conductores', {
    headers: {
      'Set-Cookie': await mitimitiCookiePref.serialize(cookie),
    },
  });
};

// Publishing the trip step two
export const publishTripStepTwo = async (
  request: Request,
  formData: FormData
) => {
  // Getting the form data from the request
  const departureTime = formData.get('departure-time') as string;
  const pricePerSeat = formData.get('price-per-seat') as string;

  const { supabaseClient } = clientSupabaseServer(request);
  const supabaseSession = await supabaseClient.auth.getSession();
  const session = supabaseSession?.data?.session;

  if (!session) {
    return redirect('/login');
  }

  // Saving the pending trip in the cookie
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await mitimitiCookiePref.parse(cookieHeader)) || {};
  const pendingTrip = cookie.pendingTrip || {};

  // Validating the form with the zod schema
  const validatedForm = tripSchema.safeParse(pendingTrip);

  // If the pending trip from cookie is not valid we return the error
  if (!validatedForm.success) {
    return json({
      result: { success: false, message: 'error' },
      data: null,
      errors: validatedForm?.error?.issues,
    });
  }

  const language = 'es';
  const temporalDate = format(
    new Date(Number(pendingTrip.date)),
    'YYYY-MM-DD',
    language
  );

  // Creating the date with the time
  const date_trip = tzDate(
    `${temporalDate} ${departureTime}`,
    'America/Bogota'
  );

  // Creating the trip in the database
  const dbTrip: DbTrip = {
    driver_uid: session?.user?.id,
    available_seats: Number(pendingTrip.seats),
    posted_seats: Number(pendingTrip.seats),
    cost_per_seat: Number(pricePerSeat),
    from_trip: pendingTrip?.cityFrom,
    to_trip: pendingTrip?.cityTo,
    date_trip,
    trip_description: null,
  };

  // If there is session we just return the pending trip
  const insertTripResponse = await createTrip(supabaseClient, dbTrip);

  // If there is an error we return the error
  if (insertTripResponse.error) {
    return json({
      result: { success: false, message: 'error' },
      data: null,
      errors: insertTripResponse?.error,
    });
  }

  // TODO: redirect to the trip published page
  return redirect('/', {});
};
