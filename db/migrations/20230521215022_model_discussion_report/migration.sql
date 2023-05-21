-- CreateEnum
CREATE TYPE "Report_type" AS ENUM ('OFFENSIVE', 'TENDENTIOUS', 'SPAM');

-- CreateTable
CREATE TABLE "Discussion_report" (
    "id" TEXT NOT NULL,
    "reportType" "Report_type" NOT NULL,
    "comment" TEXT,
    "userId" TEXT NOT NULL,
    "discussionId" TEXT NOT NULL,

    CONSTRAINT "Discussion_report_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Discussion_report" ADD CONSTRAINT "Discussion_report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discussion_report" ADD CONSTRAINT "Discussion_report_discussionId_fkey" FOREIGN KEY ("discussionId") REFERENCES "Discussion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
