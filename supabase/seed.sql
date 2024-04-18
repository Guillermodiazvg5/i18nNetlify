------------- USERS -----------------
INSERT INTO
	"public"."user" (
		user_uid,
		name,
		email,
		phone,
		profile_picture,
		rate,
		coming_from,
		id_type,
		id_number,
		description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		'Tobias de GoingTube',
		'cperez354work@gmail.com',
		'3003526578',
		'https://goingtube-photo-user-dev.s3.amazonaws.com/Cs2f7ElskeZL9lp08soc4YhcbhV2/Cs2f7ElskeZL9lp08soc4YhcbhV2.JPG',
		null,
		'goingtube',
		null,
		null,
		null
	);

INSERT INTO
	"public"."user" (
		user_uid,
		name,
		email,
		phone,
		profile_picture,
		rate,
		coming_from,
		id_type,
		id_number,
		description
	)
VALUES
	(
		'62a0f0db-9061-4404-9731-30f929c86487',
		'John Agudelo',
		'johnaagudelo0820@gmail.com',
		'3208875634',
		'https://lh3.googleusercontent.com/-G_kkF1P8qCI/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nBvMo6H7867kJAiaanvGpz9yRMo9g/s300-c/photo.jpg',
		null,
		'goingtube',
		null,
		null,
		null
	);

INSERT INTO
	"public"."user" (
		user_uid,
		name,
		email,
		phone,
		profile_picture,
		rate,
		coming_from,
		id_type,
		id_number,
		description
	)
VALUES
	(
		'6854cc10-39d0-44e4-b19a-2794eb6b4aff',
		'JOHN ALEXANDER AGUDELO GALEANO',
		'johnaagudelo@gmail.com',
		'3207688667',
		'https://lh3.googleusercontent.com/a-/AOh14Ggq2spWlGtNtNCuIZeHJFzy948kkeEw6FeSdxRwMg',
		null,
		'goingtube',
		null,
		null,
		null
	);

INSERT INTO
	"public"."user" (
		user_uid,
		name,
		email,
		phone,
		profile_picture,
		rate,
		coming_from,
		id_type,
		id_number,
		description
	)
VALUES
	(
		'37ac4e0b-55f1-4b23-a08a-1c7283bad0ca',
		'ANDRES FELIPE AGUDELO GALEANO',
		'afagudelo62799@umanizales.edu.co',
		null,
		'https://lh3.googleusercontent.com/-QmnGL_dU684/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJP0jE_SJBfkw9Faf8NbXL64Qai0TQ/s300-c/photo.jpg',
		null,
		'goingtube',
		null,
		null,
		null
	);

INSERT INTO
	"public"."user" (
		user_uid,
		name,
		email,
		phone,
		profile_picture,
		rate,
		coming_from,
		id_type,
		id_number,
		description
	)
VALUES
	(
		'e4861323-e8f8-4b6e-8b1e-5160b3a2681f',
		'C Perez Cardona',
		'cristianperez_69@hotmail.com',
		'3003526578',
		'https://graph.facebook.com/10155144223885028/picture?width=400',
		null,
		'goingtube',
		null,
		null,
		null
	);

INSERT INTO
	"public"."user" (
		user_uid,
		name,
		email,
		phone,
		profile_picture,
		rate,
		coming_from,
		id_type,
		id_number,
		description
	)
VALUES
	(
		'857d2e15-869a-4c5c-9c52-9f1e476ec099',
		'Cristian Camilo Pérez Cardona',
		'cperez354@gmail.com',
		'3006768647',
		'https://goingtube-photo-user-dev.s3.amazonaws.com/r3NzPkDNbwW373K8QR57kajDqbg2/r3NzPkDNbwW373K8QR57kajDqbg2.JPG',
		5,
		'goingtube',
		null,
		null,
		null
	);

INSERT INTO
	"public"."user" (
		user_uid,
		name,
		email,
		phone,
		profile_picture,
		rate,
		coming_from,
		id_type,
		id_number,
		description
	)
VALUES
	(
		'0fbe7ff0-4418-4cfc-bcb3-15e460b12146',
		'tERESA CARDONA',
		'tecedel@gmail.com',
		'3003526578',
		'https://goingtube-photo-user-dev.s3.amazonaws.com/wRBWKhkIXmMkvyLHGWuUwnAARqx1/wRBWKhkIXmMkvyLHGWuUwnAARqx1.jpg',
		5,
		'goingtube',
		null,
		null,
		null
	);

INSERT INTO
	"public"."user" (
		user_uid,
		name,
		email,
		phone,
		profile_picture,
		rate,
		coming_from,
		id_type,
		id_number,
		description
	)
VALUES
	(
		'0a1dc42e-2af8-4d9d-ac82-75dcd99b1208',
		'Andrés Agudelo',
		'andresagudelo1006@gmail.com',
		null,
		'https://lh3.googleusercontent.com/a-/AOh14GjmU9rAloruUMa58CNg48mY_3g5CRVk6NJt4XoDif0=s300-c',
		null,
		'goingtube',
		null,
		null,
		null
	);

------------- END USERS -----------------
------------- CARS -----------------
INSERT INTO
	"public"."car" (
		user_uid,
		plate,
		picture,
		brand,
		kind,
		color,
		soat_date,
		insurance_date
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		'KON627',
		'https://gt-photo-car-dev.s3.amazonaws.com/r3NzPkDNbwW373K8QR57kajDqbg2/r3NzPkDNbwW373K8QR57kajDqbg2.jpg',
		'Volkswagen',
		'Nivus',
		'grey',
		'2024-08-07',
		null
	);

------------- END CARS -----------------
------------- TRIPS -----------------
INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		4360,
		'Medellín, Antioquia, Colombia',
		'Envigado, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		1,
		1,
		50600,
		'Bogota, Colombia',
		'Villavicencio, Meta, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		33000,
		'Medellín, Medellin, Antioquia, Colombia',
		'Manizales, Caldas, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		45250,
		'Medellín, Medellin, Antioquia, Colombia',
		'Bogota, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		38500,
		'Manizales, Caldas, Colombia',
		'Medellín, Medellin, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		39600,
		'Manizales, Caldas, Colombia',
		'Medellín, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		45250,
		'Bogota, Colombia',
		'Medellín, Medellin, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		1,
		1,
		55000,
		'Medellín, Medellin, Antioquia, Colombia',
		'Manizales, Caldas, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		2,
		2,
		55000,
		'Manizales, Caldas, Colombia',
		'Medellín, Medellin, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		3,
		4,
		39600,
		'Manizales, Caldas, Colombia',
		'Medellín, Medellin, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		38500,
		'Medellín, Medellin, Antioquia, Colombia',
		'Manizales, Caldas, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		38500,
		'Medellín, Medellin, Antioquia, Colombia',
		'Manizales, Caldas, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		1,
		1,
		50250,
		'Cali, Valle del Cauca, Colombia',
		'Manizales, Caldas, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		3,
		3,
		46200,
		'Manizales, Caldas, Colombia',
		'Medellín, Medellin, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		4952,
		'Manizales, Caldas, Colombia',
		'Villamaría, Caldas, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		33000,
		'Manizales, Caldas, Colombia',
		'Medellín, Medellin, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		1,
		1,
		33750,
		'Pereira, Risaralda, Colombia',
		'Medellín, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		1,
		1,
		45250,
		'Bogotá, Colombia',
		'Medellín, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		1,
		1,
		45000,
		'Manizales, Caldas, Colombia',
		'Bogota, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		38500,
		'Manizales, Caldas, Colombia',
		'Medellín, Medellin, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		55000,
		'Villavicencio, Meta, Colombia',
		'Bogota, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		5952,
		'Villamaría, Caldas, Colombia',
		'Manizales, Caldas, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		45000,
		'Medellín, Medellin, Antioquia, Colombia',
		'Manzanares, Caldas, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		176550,
		'Valledupar, Cesar, Colombia',
		'Cali, Valle del Cauca, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		2,
		4,
		33000,
		'Medellín, Medellin, Antioquia, Colombia',
		'Manizales, Caldas, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		33750,
		'Manizales, Caldas, Colombia',
		'Medellín, Medellin, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		3,
		4,
		40000,
		'Bogota, Colombia',
		'Pereira, Risaralda, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		22550,
		'Cali, Valle del Cauca, Colombia',
		'Popayán, Cauca, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		38500,
		'Medellín, Medellin, Antioquia, Colombia',
		'Manizales, Caldas, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

INSERT INTO
	"public"."trip" (
		driver_uid,
		available_seats,
		posted_seats,
		cost_per_seat,
		from_trip,
		to_trip,
		date_trip,
		trip_description
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		4,
		4,
		28750,
		'Medellín, Medellin, Antioquia, Colombia',
		'Manizales, Caldas, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description'
	);

------------- END TRIPS -----------------

------------- POST -----------------

INSERT INTO
	"public"."post" (
		passenger_uid,
		from_trip,
		to_trip,
		date_trip,
		description,
		asking_seats
	)
VALUES
	(
		'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
		'Medellín, Medellin, Antioquia, Colombia',
		'Manizales, Caldas, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description',
		2
	);


	INSERT INTO
	"public"."post" (
		passenger_uid,
		from_trip,
		to_trip,
		date_trip,
		description,
		asking_seats
	)
VALUES
	(
		'62a0f0db-9061-4404-9731-30f929c86487',
		'Cali, Valle del Cauca, Colombia',
		'Popayán, Cauca, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description',
		1
	);

INSERT INTO
	"public"."post" (
		passenger_uid,
		from_trip,
		to_trip,
		date_trip,
		description,
		asking_seats
	)
VALUES
	(
		'6854cc10-39d0-44e4-b19a-2794eb6b4aff',
		'Bogota, Colombia',
		'Pereira, Risaralda, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description',
		2
	);



INSERT INTO
	"public"."post" (
		passenger_uid,
		from_trip,
		to_trip,
		date_trip,
		description,
		asking_seats
	)
VALUES
	(
		'37ac4e0b-55f1-4b23-a08a-1c7283bad0ca',
		'Manizales, Caldas, Colombia',
		'Medellín, Medellin, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description',
		3
	);


	INSERT INTO
	"public"."post" (
		passenger_uid,
		from_trip,
		to_trip,
		date_trip,
		description,
		asking_seats
	)
VALUES
	(
		'e4861323-e8f8-4b6e-8b1e-5160b3a2681f',
		'Valledupar, Cesar, Colombia',
		'Cali, Valle del Cauca, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description',
		1
	);


	INSERT INTO
	"public"."post" (
		passenger_uid,
		from_trip,
		to_trip,
		date_trip,
		description,
		asking_seats
	)
VALUES
	(
		'857d2e15-869a-4c5c-9c52-9f1e476ec099',
		'Manizales, Caldas, Colombia',
		'Medellín, Medellin, Antioquia, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description',
		1
	);

		INSERT INTO
	"public"."post" (
		passenger_uid,
		from_trip,
		to_trip,
		date_trip,
		description,
		asking_seats
	)
VALUES
	(
		'0fbe7ff0-4418-4cfc-bcb3-15e460b12146',
		'Bogota, Colombia',
		'Pereira, Risaralda, Colombia',
		'2024-04-06T00:45:04Z',
		'Fake description',
		1
	);