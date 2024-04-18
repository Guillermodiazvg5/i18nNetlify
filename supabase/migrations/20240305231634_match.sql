CREATE TABLE
    IF NOT EXISTS "public"."match" (
        "id" "uuid" DEFAULT "gen_random_uuid" () NOT NULL,
        "trip_uid" "uuid" NOT NULL,
        "post_uid" "uuid" NOT NULL,
        "status" character varying(20),
        "passanger_accepted" boolean NOT NULL,
        "driver_accepted" boolean NOT NULL,
        "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "match_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "fk_trip" FOREIGN KEY ("trip_uid") REFERENCES "trip" ("id") ON DELETE CASCADE,
        CONSTRAINT "fk_post" FOREIGN KEY ("post_uid") REFERENCES "post" ("id") ON DELETE CASCADE
    );

-- Changing table owner
ALTER TABLE "public"."match" OWNER TO postgres;

-- Setting permissions
GRANT ALL ON TABLE "public"."match" TO anon;

GRANT ALL ON TABLE "public"."match" TO authenticated;

GRANT ALL ON TABLE "public"."match" TO postgres;

GRANT ALL ON TABLE "public"."match" TO service_role;