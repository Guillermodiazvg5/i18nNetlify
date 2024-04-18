CREATE TABLE
    IF NOT EXISTS "public"."post" (
        "id" "uuid" DEFAULT "gen_random_uuid" () NOT NULL,
        "passenger_uid" "uuid" NOT NULL,
        "from_trip" character varying(100) NOT NULL,
        "to_trip" character varying(100) NOT NULL,
        "date_trip" timestamptz NOT NULL,
        "description" "text",
        "asking_seats" numeric NOT NULL,
        "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "post_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "fk_user" FOREIGN KEY ("passenger_uid") REFERENCES "user" ("user_uid") ON DELETE CASCADE
    );

-- Changing table owner
ALTER TABLE "public"."post" OWNER TO postgres;

-- Setting permissions
GRANT ALL ON TABLE "public"."post" TO anon;

GRANT ALL ON TABLE "public"."post" TO authenticated;

GRANT ALL ON TABLE "public"."post" TO postgres;

GRANT ALL ON TABLE "public"."post" TO service_role;