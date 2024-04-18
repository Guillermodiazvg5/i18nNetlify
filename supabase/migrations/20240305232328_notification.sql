CREATE TABLE
    IF NOT EXISTS "public"."notification" (
        "id" "uuid" DEFAULT "gen_random_uuid" () NOT NULL,
        "user_uid" "uuid" NOT NULL,
        "kind" character varying(20) NOT NULL,
        "status" character varying(20) NOT NULL,
        "message" character varying(50) NOT NULL,
        "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "notification_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "fk_user" FOREIGN KEY ("user_uid") REFERENCES "user" ("user_uid") ON DELETE CASCADE
    );

-- Changing table owner
ALTER TABLE "public"."notification" OWNER TO postgres;

-- Setting permissions
GRANT ALL ON TABLE "public"."notification" TO anon;

GRANT ALL ON TABLE "public"."notification" TO authenticated;

GRANT ALL ON TABLE "public"."notification" TO postgres;

GRANT ALL ON TABLE "public"."notification" TO service_role;