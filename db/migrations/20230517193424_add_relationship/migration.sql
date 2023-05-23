/*
  Warnings:

  - Added the required column `created_by` to the `Discussion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `room_id` to the `Discussion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creator` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Discussion" ADD COLUMN     "created_by" TEXT NOT NULL,
ADD COLUMN     "room_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "category_id" TEXT NOT NULL,
ADD COLUMN     "creator" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Token" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_CategoryToDiscussion" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToDiscussion_AB_unique" ON "_CategoryToDiscussion"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToDiscussion_B_index" ON "_CategoryToDiscussion"("B");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_creator_fkey" FOREIGN KEY ("creator") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discussion" ADD CONSTRAINT "Discussion_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discussion" ADD CONSTRAINT "Discussion_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToDiscussion" ADD CONSTRAINT "_CategoryToDiscussion_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToDiscussion" ADD CONSTRAINT "_CategoryToDiscussion_B_fkey" FOREIGN KEY ("B") REFERENCES "Discussion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
