-- CreateTable
CREATE TABLE "games" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "status" BOOLEAN DEFAULT false,
    "grade" INTEGER DEFAULT 0,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);
