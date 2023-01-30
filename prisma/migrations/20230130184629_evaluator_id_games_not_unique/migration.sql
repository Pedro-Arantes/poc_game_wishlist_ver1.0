-- DropIndex
DROP INDEX "games_evaluator_id_key";

-- AlterTable
ALTER TABLE "games" ALTER COLUMN "status" SET DEFAULT false;
