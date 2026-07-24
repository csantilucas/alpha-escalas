/*
  Warnings:

  - Changed the type of `dia_plantao` on the `Plantonistas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Plantonistas" DROP COLUMN "dia_plantao",
ADD COLUMN     "dia_plantao" TIMESTAMP(3) NOT NULL;
