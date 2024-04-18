export type Trip = {
  id: string;
  date: string;
  user: {
    avatar: string;
    name: string;
  };
  trip: {
    startLocation: string;
    finishLocation: string;
    hourStart: string;
    hourFinish: string;
    numberOfPassengers: number;
  };
};

export type DbTrip = {
  driver_uid: string;
  available_seats: number;
  posted_seats: number;
  cost_per_seat: number;
  from_trip: string;
  to_trip: string;
  date_trip: string | Date;
  trip_description: string | null;
};

export type PendingTrip = {
  cityFrom: string;
  cityTo: string;
  date: string;
  seats: string;
};
