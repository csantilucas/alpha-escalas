/*
  Warnings:

  - You are about to drop the column `dia_plantao` on the `Plantonistas` table. All the data in the column will be lost.
  - Added the required column `proxima_data` to the `Plantonistas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plantonistas" DROP COLUMN "dia_plantao",
ADD COLUMN     "proxima_data" TIMESTAMP(3) NOT NULL;
