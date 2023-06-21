/*
  Warnings:

  - You are about to drop the column `belong_in_room` on the `Discussion` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Discussion` table. All the data in the column will be lost.
  - You are about to drop the column `question_description` on the `Discussion` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Emblem` table. All the data in the column will be lost.
  - You are about to drop the column `extinctAt` on the `Emblem` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Report` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `creator` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `antiCSRFToken` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `hashedSessionToken` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `privateData` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `publicData` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `hashedToken` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `sentTo` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Token` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `institute` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_situation` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Awnser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Awnser_reaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Discussion_reaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Discussion_report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_invite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_manager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_emblems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToDiscussion` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[hashed_token,type]` on the table `Token` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category_id` to the `Discussion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Discussion` table without a default value. This is not possible if the table is not empty.
  - Made the column `subject` on table `Discussion` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `extinct_at` to the `Emblem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creator_id` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expires_at` to the `Token` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hashed_token` to the `Token` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sent_to` to the `Token` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Token` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Token` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "ShowInProfile" AS ENUM ('YES', 'NO');

-- CreateEnum
CREATE TYPE "ReactionType" AS ENUM ('LIKE', 'DISLIKE');

-- CreateEnum
CREATE TYPE "ReportType" AS ENUM ('OFFENSIVE', 'TENDENTIOUS', 'SPAM');

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'CREATOR';

-- DropForeignKey
ALTER TABLE "Awnser" DROP CONSTRAINT "Awnser_discussionId_fkey";

-- DropForeignKey
ALTER TABLE "Awnser" DROP CONSTRAINT "Awnser_userId_fkey";

-- DropForeignKey
ALTER TABLE "Awnser_reaction" DROP CONSTRAINT "Awnser_reaction_awnserId_fkey";

-- DropForeignKey
ALTER TABLE "Awnser_reaction" DROP CONSTRAINT "Awnser_reaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "Discussion_reaction" DROP CONSTRAINT "Discussion_reaction_discussionId_fkey";

-- DropForeignKey
ALTER TABLE "Discussion_reaction" DROP CONSTRAINT "Discussion_reaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "Discussion_report" DROP CONSTRAINT "Discussion_report_discussionId_fkey";

-- DropForeignKey
ALTER TABLE "Discussion_report" DROP CONSTRAINT "Discussion_report_userId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_creator_fkey";

-- DropForeignKey
ALTER TABLE "Room_invite" DROP CONSTRAINT "Room_invite_guestId_fkey";

-- DropForeignKey
ALTER TABLE "Room_invite" DROP CONSTRAINT "Room_invite_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Room_invite" DROP CONSTRAINT "Room_invite_userId_fkey";

-- DropForeignKey
ALTER TABLE "Room_manager" DROP CONSTRAINT "Room_manager_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Room_manager" DROP CONSTRAINT "Room_manager_userId_fkey";

-- DropForeignKey
ALTER TABLE "Room_report" DROP CONSTRAINT "Room_report_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Room_report" DROP CONSTRAINT "Room_report_userId_fkey";

-- DropForeignKey
ALTER TABLE "Room_users" DROP CONSTRAINT "Room_users_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Room_users" DROP CONSTRAINT "Room_users_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_userId_fkey";

-- DropForeignKey
ALTER TABLE "User_emblems" DROP CONSTRAINT "User_emblems_emblemId_fkey";

-- DropForeignKey
ALTER TABLE "User_emblems" DROP CONSTRAINT "User_emblems_userId_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToDiscussion" DROP CONSTRAINT "_CategoryToDiscussion_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToDiscussion" DROP CONSTRAINT "_CategoryToDiscussion_B_fkey";

-- DropIndex
DROP INDEX "Token_hashedToken_type_key";

-- AlterTable
ALTER TABLE "Discussion" DROP COLUMN "belong_in_room",
DROP COLUMN "createdAt",
DROP COLUMN "question_description",
ADD COLUMN     "category_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "subject" SET NOT NULL;

-- AlterTable
ALTER TABLE "Emblem" DROP COLUMN "createdAt",
DROP COLUMN "extinctAt",
ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "extinct_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Report" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "createdAt",
DROP COLUMN "creator",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "creator_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "antiCSRFToken",
DROP COLUMN "createdAt",
DROP COLUMN "expiresAt",
DROP COLUMN "hashedSessionToken",
DROP COLUMN "privateData",
DROP COLUMN "publicData",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "anti_csrf_token" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expires_at" TIMESTAMP(3),
ADD COLUMN     "hashed_session_token" TEXT,
ADD COLUMN     "private_data" TEXT,
ADD COLUMN     "public_data" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Token" DROP COLUMN "createdAt",
DROP COLUMN "expiresAt",
DROP COLUMN "hashedToken",
DROP COLUMN "sentTo",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expires_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "hashed_token" TEXT NOT NULL,
ADD COLUMN     "sent_to" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "institute",
DROP COLUMN "updatedAt",
DROP COLUMN "user_situation",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "institution" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "user_role" "UserRole" NOT NULL;

-- DropTable
DROP TABLE "Awnser";

-- DropTable
DROP TABLE "Awnser_reaction";

-- DropTable
DROP TABLE "Discussion_reaction";

-- DropTable
DROP TABLE "Discussion_report";

-- DropTable
DROP TABLE "Room_invite";

-- DropTable
DROP TABLE "Room_manager";

-- DropTable
DROP TABLE "Room_report";

-- DropTable
DROP TABLE "Room_users";

-- DropTable
DROP TABLE "User_emblems";

-- DropTable
DROP TABLE "_CategoryToDiscussion";

-- DropEnum
DROP TYPE "Reaction_type";

-- DropEnum
DROP TYPE "Report_type";

-- DropEnum
DROP TYPE "UserSituation";

-- DropEnum
DROP TYPE "showInProfile";

-- CreateTable
CREATE TABLE "UserEmblem" (
    "id" TEXT NOT NULL,
    "acquisition_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "show_in_profile" "ShowInProfile" NOT NULL,
    "user_id" TEXT NOT NULL,
    "emblem_id" TEXT NOT NULL,

    CONSTRAINT "UserEmblem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomInvite" (
    "id" TEXT NOT NULL,
    "inviter_id" TEXT NOT NULL,
    "guest_id" TEXT NOT NULL,
    "room_id" TEXT NOT NULL,

    CONSTRAINT "RoomInvite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomReport" (
    "id" TEXT NOT NULL,
    "report_type" "ReportType" NOT NULL,
    "comment" TEXT,
    "user_id" TEXT NOT NULL,
    "room_id" TEXT NOT NULL,

    CONSTRAINT "RoomReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomManager" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "user_id" TEXT NOT NULL,
    "room_id" TEXT NOT NULL,

    CONSTRAINT "RoomManager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomUser" (
    "id" TEXT NOT NULL,
    "member_since" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "room_id" TEXT NOT NULL,

    CONSTRAINT "RoomUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "discussion_id" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnswerReaction" (
    "id" TEXT NOT NULL,
    "reaction_type" "ReactionType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "answer_id" TEXT NOT NULL,

    CONSTRAINT "AnswerReaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscussionReaction" (
    "id" TEXT NOT NULL,
    "reaction_type" "ReactionType" NOT NULL,
    "user_id" TEXT NOT NULL,
    "discussion_id" TEXT NOT NULL,

    CONSTRAINT "DiscussionReaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscussionReport" (
    "id" TEXT NOT NULL,
    "report_type" "ReportType" NOT NULL,
    "comment" TEXT,
    "user_id" TEXT NOT NULL,
    "discussion_id" TEXT NOT NULL,

    CONSTRAINT "DiscussionReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscussionCategory" (
    "id" TEXT NOT NULL,
    "discussion_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "DiscussionCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomCategory" (
    "id" TEXT NOT NULL,
    "room_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,

    CONSTRAINT "RoomCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Token_hashed_token_type_key" ON "Token"("hashed_token", "type");

-- AddForeignKey
ALTER TABLE "UserEmblem" ADD CONSTRAINT "UserEmblem_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEmblem" ADD CONSTRAINT "UserEmblem_emblem_id_fkey" FOREIGN KEY ("emblem_id") REFERENCES "Emblem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomInvite" ADD CONSTRAINT "RoomInvite_inviter_id_fkey" FOREIGN KEY ("inviter_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomInvite" ADD CONSTRAINT "RoomInvite_guest_id_fkey" FOREIGN KEY ("guest_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomInvite" ADD CONSTRAINT "RoomInvite_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomReport" ADD CONSTRAINT "RoomReport_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomReport" ADD CONSTRAINT "RoomReport_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomManager" ADD CONSTRAINT "RoomManager_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomManager" ADD CONSTRAINT "RoomManager_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomUser" ADD CONSTRAINT "RoomUser_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomUser" ADD CONSTRAINT "RoomUser_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discussion" ADD CONSTRAINT "Discussion_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_discussion_id_fkey" FOREIGN KEY ("discussion_id") REFERENCES "Discussion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerReaction" ADD CONSTRAINT "AnswerReaction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerReaction" ADD CONSTRAINT "AnswerReaction_answer_id_fkey" FOREIGN KEY ("answer_id") REFERENCES "Answer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscussionReaction" ADD CONSTRAINT "DiscussionReaction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscussionReaction" ADD CONSTRAINT "DiscussionReaction_discussion_id_fkey" FOREIGN KEY ("discussion_id") REFERENCES "Discussion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscussionReport" ADD CONSTRAINT "DiscussionReport_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscussionReport" ADD CONSTRAINT "DiscussionReport_discussion_id_fkey" FOREIGN KEY ("discussion_id") REFERENCES "Discussion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscussionCategory" ADD CONSTRAINT "DiscussionCategory_discussion_id_fkey" FOREIGN KEY ("discussion_id") REFERENCES "Discussion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscussionCategory" ADD CONSTRAINT "DiscussionCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomCategory" ADD CONSTRAINT "RoomCategory_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomCategory" ADD CONSTRAINT "RoomCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
