-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'SUPERADMIN');

-- CreateTable
CREATE TABLE "Room_manager" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "userId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "Room_manager_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Room_manager" ADD CONSTRAINT "Room_manager_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room_manager" ADD CONSTRAINT "Room_manager_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
