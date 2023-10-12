/*
  Warnings:

  - You are about to drop the column `transactionId` on the `Bank` table. All the data in the column will be lost.
  - You are about to drop the column `transactionId` on the `Type` table. All the data in the column will be lost.
  - Added the required column `bankId` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bank" DROP CONSTRAINT "Bank_transactionId_fkey";

-- DropForeignKey
ALTER TABLE "Type" DROP CONSTRAINT "Type_transactionId_fkey";

-- AlterTable
ALTER TABLE "Bank" DROP COLUMN "transactionId";

-- AlterTable
ALTER TABLE "Type" DROP COLUMN "transactionId";

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "bankId" INTEGER NOT NULL,
ADD COLUMN     "typeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
