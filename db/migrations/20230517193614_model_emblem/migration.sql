-- CreateTable
CREATE TABLE "Emblem" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "extinctAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Emblem_pkey" PRIMARY KEY ("id")
);
