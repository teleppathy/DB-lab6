-- CreateEnum
CREATE TYPE "payment_type" AS ENUM ('готівка', 'переказ', 'за реквізитами', 'промокод');

-- CreateEnum
CREATE TYPE "restriction" AS ENUM ('0+', '12+', '16+', '18+', '21+');

-- CreateEnum
CREATE TYPE "subscription_type" AS ENUM ('сімейна', 'студентська', 'стандартна');

-- CreateTable
CREATE TABLE "actor" (
    "actor_id" SERIAL NOT NULL,
    "first_name" VARCHAR(64) NOT NULL,
    "last_name" VARCHAR(64) NOT NULL,
    "country" VARCHAR(64) NOT NULL,
    "birth_date" DATE,

    CONSTRAINT "actor_pkey" PRIMARY KEY ("actor_id")
);

-- CreateTable
CREATE TABLE "customer" (
    "customer_id" SERIAL NOT NULL,
    "first_name" VARCHAR(32) NOT NULL,
    "last_name" VARCHAR(32) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "password" TEXT NOT NULL,
    "registration_date" DATE,
    "birth_date" DATE,
    "is_deleted" BOOLEAN,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "director" (
    "director_id" SERIAL NOT NULL,
    "first_name" VARCHAR(64) NOT NULL,
    "last_name" VARCHAR(64) NOT NULL,
    "country" VARCHAR(64) NOT NULL,

    CONSTRAINT "director_pkey" PRIMARY KEY ("director_id")
);

-- CreateTable
CREATE TABLE "film" (
    "film_id" SERIAL NOT NULL,
    "title" TEXT,
    "release_year" INTEGER,
    "duration" SMALLINT,
    "age_restriction" "restriction",
    "studio_id" INTEGER,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "film_pkey" PRIMARY KEY ("film_id")
);

-- CreateTable
CREATE TABLE "film_actor" (
    "film_id" INTEGER NOT NULL,
    "actor_id" INTEGER NOT NULL,

    CONSTRAINT "film_actor_pkey" PRIMARY KEY ("film_id","actor_id")
);

-- CreateTable
CREATE TABLE "film_director" (
    "film_id" INTEGER NOT NULL,
    "director_id" INTEGER NOT NULL,

    CONSTRAINT "film_director_pkey" PRIMARY KEY ("film_id","director_id")
);

-- CreateTable
CREATE TABLE "film_genre" (
    "film_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,

    CONSTRAINT "film_genre_pkey" PRIMARY KEY ("film_id","genre_id")
);

-- CreateTable
CREATE TABLE "genre" (
    "genre_id" SERIAL NOT NULL,
    "name" VARCHAR(64),
    "description" TEXT,

    CONSTRAINT "genre_pkey" PRIMARY KEY ("genre_id")
);

-- CreateTable
CREATE TABLE "payment" (
    "payment_id" SERIAL NOT NULL,
    "amount" REAL,
    "payment_type" "payment_type",
    "payment_date" DATE,
    "status" BOOLEAN,
    "customer_id" INTEGER,
    "subscription_id" INTEGER,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "studio" (
    "studio_id" SERIAL NOT NULL,
    "name" VARCHAR(400) NOT NULL,
    "country" VARCHAR(300) NOT NULL,
    "founded_date" DATE,

    CONSTRAINT "studio_pkey" PRIMARY KEY ("studio_id")
);

-- CreateTable
CREATE TABLE "subscription" (
    "subscription_id" SERIAL NOT NULL,
    "start_date" DATE,
    "end_date" DATE,
    "type" "subscription_type" NOT NULL,
    "price" REAL,
    "customer_id" INTEGER,

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("subscription_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_email_key" ON "customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "genre_name_key" ON "genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "studio_name_key" ON "studio"("name");

-- AddForeignKey
ALTER TABLE "film" ADD CONSTRAINT "film_studio_id_fkey" FOREIGN KEY ("studio_id") REFERENCES "studio"("studio_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "film_actor" ADD CONSTRAINT "film_actor_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "actor"("actor_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "film_actor" ADD CONSTRAINT "film_actor_film_id_fkey" FOREIGN KEY ("film_id") REFERENCES "film"("film_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "film_director" ADD CONSTRAINT "film_director_director_id_fkey" FOREIGN KEY ("director_id") REFERENCES "director"("director_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "film_director" ADD CONSTRAINT "film_director_film_id_fkey" FOREIGN KEY ("film_id") REFERENCES "film"("film_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "film_genre" ADD CONSTRAINT "film_genre_film_id_fkey" FOREIGN KEY ("film_id") REFERENCES "film"("film_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "film_genre" ADD CONSTRAINT "film_genre_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genre"("genre_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "subscription"("subscription_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
