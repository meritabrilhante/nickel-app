-- CreateTable
CREATE TABLE "Room_report" (
    "id" TEXT NOT NULL,
    "report_type" "Report_type" NOT NULL,
    "comment" TEXT,
    "userId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "Room_report_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Room_report" ADD CONSTRAINT "Room_report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room_report" ADD CONSTRAINT "Room_report_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
