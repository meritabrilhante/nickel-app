/*
  Warnings:

  - Made the column `userId` on table `Session` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "showInProfile" AS ENUM ('YES', 'NO');

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "userId" SET NOT NULL;

-- CreateTable
CREATE TABLE "User_emblems" (
    "id" TEXT NOT NULL,
    "aquisitionAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "showInProfile" "showInProfile" NOT NULL,
    "userId" TEXT NOT NULL,
    "emblemId" TEXT NOT NULL,

    CONSTRAINT "User_emblems_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User_emblems" ADD CONSTRAINT "User_emblems_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_emblems" ADD CONSTRAINT "User_emblems_emblemId_fkey" FOREIGN KEY ("emblemId") REFERENCES "Emblem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
