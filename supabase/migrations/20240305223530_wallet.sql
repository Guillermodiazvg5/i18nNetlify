CREATE TABLE
    IF NOT EXISTS "public"."wallet" (
        "id" "uuid" DEFAULT "gen_random_uuid" () NOT NULL,
        "amount" numeric NOT NULL,
        "currency" character varying(10) NOT NULL,
        "user_uid" "uuid" NOT NULL,
        "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "wallet_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "fk_user" FOREIGN KEY ("user_uid") REFERENCES "user" ("user_uid") ON DELETE CASCADE
    );

-- Changing table owner
ALTER TABLE "public"."wallet" OWNER TO postgres;

-- Setting permissions
GRANT ALL ON TABLE "public"."wallet" TO anon;

GRANT ALL ON TABLE "public"."wallet" TO authenticated;

GRANT ALL ON TABLE "public"."wallet" TO postgres;

GRANT ALL ON TABLE "public"."wallet" TO service_role;