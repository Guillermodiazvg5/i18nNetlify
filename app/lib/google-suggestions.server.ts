import { PlaceAutocompleteType } from '@googlemaps/google-maps-services-js';

import singletonClients from './singleton-clients.server';

export const getGooglePredictions = async (searchText: string) => {
  const response = await singletonClients
    .getGoogleMapsClient()
    .placeAutocomplete({
      params: {
        input: searchText,
        key: process.env.GOOGLE_PLACES_API_KEY || '',
        language: process.env.GOOGLE_PLACES_LANGUAGE || 'es',
        components: [process.env.GOOGLE_PLACES_COUNTRIES || 'country:CO'],
        types: PlaceAutocompleteType.cities,
      },
      timeout: 1000,
    });
  return response.data;
};
