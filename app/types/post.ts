export type PostPassenger = {
  id: string;
  passengerUid: string;
  fromTrip: string;
  toTrip: string;
  dateTrip: string;
  askingSeats: number;
  user: {
    userUid: string;
    name: string;
    profilePicture: string | null;
  } | null;
};
