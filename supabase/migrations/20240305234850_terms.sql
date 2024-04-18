CREATE TABLE
    IF NOT EXISTS "public"."terms" (
        "id" "uuid" DEFAULT "gen_random_uuid" () NOT NULL,
        "user_uid" "uuid" NOT NULL,
        "terms_version" varchar(20) NOT NULL,
        "terms_url" "text" NOT NULL,
        "accepted" boolean NOT NULL,
        "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "terms_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "fk_user" FOREIGN KEY ("user_uid") REFERENCES "user" ("user_uid") ON DELETE CASCADE
    );

-- Changing table owner
ALTER TABLE "public"."terms" OWNER TO postgres;

-- Setting permissions
GRANT ALL ON TABLE "public"."terms" TO anon;

GRANT ALL ON TABLE "public"."terms" TO authenticated;

GRANT ALL ON TABLE "public"."terms" TO postgres;

GRANT ALL ON TABLE "public"."terms" TO service_role;