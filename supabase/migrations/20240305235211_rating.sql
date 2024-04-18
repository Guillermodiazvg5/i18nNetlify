CREATE TABLE
    IF NOT EXISTS "public"."rating" (
        "id" "uuid" DEFAULT "gen_random_uuid" () NOT NULL,
        "rating_user_uid" "uuid" NOT NULL,
        "rated_user_uid" "uuid" NOT NULL,
        "match_uid" "uuid" NOT NULL,
        "state" varchar(20) NOT NULL,
        "rate" numeric NULL,
        "comment" "text" NULL,
        "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "rating_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "fk_rating_user" FOREIGN KEY ("rating_user_uid") REFERENCES "user" ("user_uid") ON DELETE CASCADE,
        CONSTRAINT "fk_rated_user" FOREIGN KEY ("rated_user_uid") REFERENCES "user" ("user_uid") ON DELETE CASCADE,
        CONSTRAINT "fk_rating_match" FOREIGN KEY ("match_uid") REFERENCES "match" ("id") ON DELETE CASCADE

    );

-- Changing table owner
ALTER TABLE "public"."rating" OWNER TO postgres;

-- Setting permissions
GRANT ALL ON TABLE "public"."rating" TO anon;

GRANT ALL ON TABLE "public"."rating" TO authenticated;

GRANT ALL ON TABLE "public"."rating" TO postgres;

GRANT ALL ON TABLE "public"."rating" TO service_role;