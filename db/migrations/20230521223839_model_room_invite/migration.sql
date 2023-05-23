-- CreateTable
CREATE TABLE "Room_invite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "guestId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "Room_invite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Room_invite" ADD CONSTRAINT "Room_invite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room_invite" ADD CONSTRAINT "Room_invite_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room_invite" ADD CONSTRAINT "Room_invite_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
