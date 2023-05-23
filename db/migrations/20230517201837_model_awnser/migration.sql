-- CreateTable
CREATE TABLE "Awnser" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "discussionId" TEXT NOT NULL,

    CONSTRAINT "Awnser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Awnser" ADD CONSTRAINT "Awnser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Awnser" ADD CONSTRAINT "Awnser_discussionId_fkey" FOREIGN KEY ("discussionId") REFERENCES "Discussion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
