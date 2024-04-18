import { PostPassenger } from "./post";
import { PendingTrip } from "./trip";

export type LoaderResponse = {
  postsPassengers: PostPassenger[];
  pendingTrip: PendingTrip | null;
};