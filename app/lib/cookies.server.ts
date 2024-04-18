import { createCookie } from '@remix-run/node';

export const mitimitiCookiePref = createCookie('mitimiti-pref', {
  expires: new Date(Date.now() + 60_000),
  maxAge: 60,
  // TODO: only for sensitive data.
  /* httpOnly: true, */
});

export const getCookiesPreference = async (request: Request) => {
  const cookieHeader = request.headers.get('Cookie');
  const cookie = (await mitimitiCookiePref.parse(cookieHeader)) || {};
  return cookie || {};
};
