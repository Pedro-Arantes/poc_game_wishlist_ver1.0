-- AlterTable
ALTER TABLE "games" ALTER COLUMN "status" SET DEFAULT false,
ALTER COLUMN "grade" SET DEFAULT 0,
ALTER COLUMN "grade" SET DATA TYPE DECIMAL(65,30);