/*
  Warnings:

  - You are about to drop the `Settings` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "SocialPlatform" AS ENUM ('DISCORD', 'GITHUB', 'INSTAGRAM', 'X', 'WHATSAPP', 'YOUTUBE', 'KICK', 'TIKTOK', 'TWITCH', 'FACEBOOK', 'MESSANGER', 'TELEGRAM', 'PINTEREST');

-- DropForeignKey
ALTER TABLE "Settings" DROP CONSTRAINT "Settings_userId_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL;

-- DropTable
DROP TABLE "Settings";

-- CreateTable
CREATE TABLE "socials" (
    "id" TEXT NOT NULL,
    "name" "SocialPlatform" NOT NULL,
    "settingsId" TEXT NOT NULL,

    CONSTRAINT "socials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choices" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "Image" TEXT NOT NULL DEFAULT '/images/default_choice.jpg',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Choices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "settings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "theme" TEXT NOT NULL DEFAULT 'main',
    "mode" TEXT NOT NULL DEFAULT 'dark',

    CONSTRAINT "settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "socials_settingsId_name_key" ON "socials"("settingsId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "settings_userId_key" ON "settings"("userId");

-- AddForeignKey
ALTER TABLE "socials" ADD CONSTRAINT "socials_settingsId_fkey" FOREIGN KEY ("settingsId") REFERENCES "settings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "settings" ADD CONSTRAINT "settings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
