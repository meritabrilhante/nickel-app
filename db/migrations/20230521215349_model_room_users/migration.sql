-- CreateTable
CREATE TABLE "Room_users" (
    "id" TEXT NOT NULL,
    "entryAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "Room_users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Room_users" ADD CONSTRAINT "Room_users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room_users" ADD CONSTRAINT "Room_users_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
