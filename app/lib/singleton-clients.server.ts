import { Client } from '@googlemaps/google-maps-services-js';
class SingletonClient {
  private static googleMapsClient: Client;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  public static getGoogleMapsClient() {
    if (!SingletonClient.googleMapsClient) {
      SingletonClient.googleMapsClient = new Client({});
    }
    return SingletonClient.googleMapsClient;
  }
}

export default SingletonClient;
