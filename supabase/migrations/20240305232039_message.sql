CREATE TABLE
    IF NOT EXISTS "public"."message" (
        "id" "uuid" DEFAULT "gen_random_uuid" () NOT NULL,
        "match_uid" "uuid" NOT NULL,
        "user_uid" "uuid" NOT NULL,
        "text_message" "text" NOT NULL,
        "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "message_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "fk_match" FOREIGN KEY ("match_uid") REFERENCES "match" ("id") ON DELETE CASCADE,
        CONSTRAINT "fk_user" FOREIGN KEY ("user_uid") REFERENCES "user" ("user_uid") ON DELETE CASCADE
    );

-- Changing table owner
ALTER TABLE "public"."message" OWNER TO postgres;

-- Setting permissions
GRANT ALL ON TABLE "public"."message" TO anon;

GRANT ALL ON TABLE "public"."message" TO authenticated;

GRANT ALL ON TABLE "public"."message" TO postgres;

GRANT ALL ON TABLE "public"."message" TO service_role;