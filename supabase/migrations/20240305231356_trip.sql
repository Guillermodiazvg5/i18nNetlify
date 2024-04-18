CREATE TABLE
    IF NOT EXISTS "public"."trip" (
        "id" "uuid" DEFAULT "gen_random_uuid" () NOT NULL,
        "driver_uid" "uuid" NOT NULL,
        "available_seats" numeric NOT NULL,
        "posted_seats" numeric NOT NULL,
        "cost_per_seat" numeric NOT NULL,
        "from_trip" character varying(50) NOT NULL,
        "to_trip" character varying(50) NOT NULL,
        "date_trip" timestamptz NOT NULL,
        "trip_description" "text" NOT NULL,
        "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "trip_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "fk_driver" FOREIGN KEY ("driver_uid") REFERENCES "user" ("user_uid") ON DELETE CASCADE
    );

-- Changing table owner
ALTER TABLE public.trip OWNER TO postgres;

-- Setting permissions
GRANT ALL ON TABLE public.trip TO anon;

GRANT ALL ON TABLE public.trip TO authenticated;

GRANT ALL ON TABLE public.trip TO postgres;

GRANT ALL ON TABLE public.trip TO service_role;