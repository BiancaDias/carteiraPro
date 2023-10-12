/*
  Warnings:

  - Added the required column `userId` to the `Bank` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bank" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Type" ADD COLUMN     "userId" INTEGER NOT NULL;
