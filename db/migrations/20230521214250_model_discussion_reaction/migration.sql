-- CreateEnum
CREATE TYPE "Reaction_type" AS ENUM ('LIKE', 'DESLIKE');

-- CreateTable
CREATE TABLE "Discussion_reaction" (
    "id" TEXT NOT NULL,
    "reactionType" "Reaction_type" NOT NULL,
    "userId" TEXT NOT NULL,
    "discussionId" TEXT NOT NULL,

    CONSTRAINT "Discussion_reaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Discussion_reaction" ADD CONSTRAINT "Discussion_reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discussion_reaction" ADD CONSTRAINT "Discussion_reaction_discussionId_fkey" FOREIGN KEY ("discussionId") REFERENCES "Discussion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
