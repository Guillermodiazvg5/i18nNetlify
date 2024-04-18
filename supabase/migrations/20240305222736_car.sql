CREATE TABLE
    IF NOT EXISTS "public"."car" (
        "id" "uuid" DEFAULT "gen_random_uuid" () NOT NULL,
        "user_uid" "uuid" NOT NULL,
        "plate" character varying(10) NOT NULL,
        "picture" "text" NOT NULL,
        "brand" character varying(30) NOT NULL,
        "kind" character varying(30) NOT NULL,
        "color" character varying(30) NOT NULL,
        "soat_date" "date" NOT NULL,
        "insurance_date" "date" NULL,
        "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "car_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "fk_user" FOREIGN KEY ("user_uid") REFERENCES "user" ("user_uid") ON DELETE CASCADE
    );

-- Changing table owner
ALTER TABLE "public"."car" OWNER TO postgres;

-- Setting permissions
GRANT ALL ON TABLE "public"."car" TO anon;

GRANT ALL ON TABLE "public"."car" TO authenticated;

GRANT ALL ON TABLE "public"."car" TO postgres;

GRANT ALL ON TABLE "public"."car" TO service_role;