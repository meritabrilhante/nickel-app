/*
  Warnings:

  - Changed the type of `visibility` on the `Room` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `user_situation` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "UserSituation" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('PUBLIC', 'PRIVATE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ARCHIVED', 'ACTIVE');

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "visibility",
ADD COLUMN     "visibility" "Visibility" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "user_situation",
ADD COLUMN     "user_situation" "UserSituation" NOT NULL;

-- DropEnum
DROP TYPE "userSituation";

-- DropEnum
DROP TYPE "visibility";

-- CreateTable
CREATE TABLE "Discussion" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subject" TEXT,
    "question_description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "belong_in_room" INTEGER NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Discussion_pkey" PRIMARY KEY ("id")
);
