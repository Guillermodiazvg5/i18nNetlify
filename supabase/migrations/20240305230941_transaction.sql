CREATE TABLE
    IF NOT EXISTS "public"."transaction" (
        "id" "uuid" DEFAULT "gen_random_uuid" () NOT NULL,
        "wallet_uid" "uuid" NOT NULL,
        "amount" numeric NOT NULL,
        "kind" character varying(30) NOT NULL,
        "status" character varying(20) NOT NULL,
        "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "transaction_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "fk_wallet" FOREIGN KEY ("wallet_uid") REFERENCES "wallet" ("id") ON DELETE CASCADE
    );

-- Changing table owner
ALTER TABLE "public"."transaction" OWNER TO postgres;

-- Setting permissions
GRANT ALL ON TABLE "public"."transaction" TO anon;

GRANT ALL ON TABLE "public"."transaction" TO authenticated;

GRANT ALL ON TABLE "public"."transaction" TO postgres;

GRANT ALL ON TABLE "public"."transaction" TO service_role;