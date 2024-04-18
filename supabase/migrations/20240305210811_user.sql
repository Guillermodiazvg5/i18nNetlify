CREATE TABLE
    IF NOT EXISTS "public"."user" (
        "user_uid" "uuid" DEFAULT "gen_random_uuid" () NOT NULL,
        "name" "text" NOT NULL,
        "email" "text" NOT NULL,
        "phone" character varying(20),
        "profile_picture" "text",
        "description" "text",
        "rate" integer,
        "coming_from" character varying(10),
        "id_type" character varying(10),
        "id_number" character varying(20),
        "terms" boolean DEFAULT false NOT NULL,
        "created_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        "updated_at" timestamptz DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT "user_pkey" PRIMARY KEY ("user_uid"),
        CONSTRAINT "user_email_key" UNIQUE ("email")
    );

ALTER TABLE "public"."user" OWNER TO "postgres";

GRANT ALL ON TABLE "public"."user" TO "anon";

GRANT ALL ON TABLE "public"."user" TO "authenticated";

GRANT ALL ON TABLE "public"."user" TO "postgres";

GRANT ALL ON TABLE "public"."user" TO "service_role";