/*
  Warnings:

  - You are about to drop the column `user_situation` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Awnser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Awnser_reaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Discussion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Discussion_reaction` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Discussion_report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Emblem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_invite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_manager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_report` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room_users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User_emblems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CategoryToDiscussion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Awnser" DROP CONSTRAINT "Awnser_discussionId_fkey";

-- DropForeignKey
ALTER TABLE "Awnser" DROP CONSTRAINT "Awnser_userId_fkey";

-- DropForeignKey
ALTER TABLE "Awnser_reaction" DROP CONSTRAINT "Awnser_reaction_awnserId_fkey";

-- DropForeignKey
ALTER TABLE "Awnser_reaction" DROP CONSTRAINT "Awnser_reaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "Discussion" DROP CONSTRAINT "Discussion_created_by_fkey";

-- DropForeignKey
ALTER TABLE "Discussion" DROP CONSTRAINT "Discussion_room_id_fkey";

-- DropForeignKey
ALTER TABLE "Discussion_reaction" DROP CONSTRAINT "Discussion_reaction_discussionId_fkey";

-- DropForeignKey
ALTER TABLE "Discussion_reaction" DROP CONSTRAINT "Discussion_reaction_userId_fkey";

-- DropForeignKey
ALTER TABLE "Discussion_report" DROP CONSTRAINT "Discussion_report_discussionId_fkey";

-- DropForeignKey
ALTER TABLE "Discussion_report" DROP CONSTRAINT "Discussion_report_userId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_category_id_fkey";

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

-- AlterTable
ALTER TABLE "User" DROP COLUMN "user_situation",
DROP COLUMN "user_type";

-- DropTable
DROP TABLE "Awnser";

-- DropTable
DROP TABLE "Awnser_reaction";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Discussion";

-- DropTable
DROP TABLE "Discussion_reaction";

-- DropTable
DROP TABLE "Discussion_report";

-- DropTable
DROP TABLE "Emblem";

-- DropTable
DROP TABLE "Report";

-- DropTable
DROP TABLE "Room";

-- DropTable
DROP TABLE "Room_invite";

-- DropTable
DROP TABLE "Room_manager";

-- DropTable
DROP TABLE "Room_report";

-- DropTable
DROP TABLE "Room_users";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "Token";

-- DropTable
DROP TABLE "User_emblems";

-- DropTable
DROP TABLE "_CategoryToDiscussion";

-- DropEnum
DROP TYPE "Reaction_type";

-- DropEnum
DROP TYPE "Report_type";

-- DropEnum
DROP TYPE "Role";

-- DropEnum
DROP TYPE "Status";

-- DropEnum
DROP TYPE "UserSituation";

-- DropEnum
DROP TYPE "Visibility";

-- DropEnum
DROP TYPE "showInProfile";
