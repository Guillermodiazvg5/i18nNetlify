CREATE TABLE
    IF NOT EXISTS "public"."payment" (
        "id" "uuid" DEFAULT "gen_random_uuid" () NOT NULL,
        "match_uid" "uuid" NOT NULL,
        "kind" character varying(30) NOT NULL,
        "description" "text" NOT NULL,
        "third_payment_url" "text" NOT NULL,
        "third_payment_id" character varying(30) NOT NULL,
        "amount" numeric NOT NULL,
        "status" character varying(30) NOT NULL,
        "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "payment_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "fk_match" FOREIGN KEY ("match_uid") REFERENCES "match" ("id") ON DELETE CASCADE
    );

-- Changing table owner
ALTER TABLE "public"."payment" OWNER TO postgres;

-- Setting permissions
GRANT ALL ON TABLE "public"."payment" TO anon;

GRANT ALL ON TABLE "public"."payment" TO authenticated;

GRANT ALL ON TABLE "public"."payment" TO postgres;

GRANT ALL ON TABLE "public"."payment" TO service_role;