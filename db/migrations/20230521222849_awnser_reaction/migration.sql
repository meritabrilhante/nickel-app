-- CreateTable
CREATE TABLE "Awnser_reaction" (
    "id" TEXT NOT NULL,
    "reactionType" "Reaction_type" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "awnserId" TEXT NOT NULL,

    CONSTRAINT "Awnser_reaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Awnser_reaction" ADD CONSTRAINT "Awnser_reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Awnser_reaction" ADD CONSTRAINT "Awnser_reaction_awnserId_fkey" FOREIGN KEY ("awnserId") REFERENCES "Awnser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
