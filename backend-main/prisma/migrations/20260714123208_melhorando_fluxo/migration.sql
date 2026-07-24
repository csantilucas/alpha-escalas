/*
  Warnings:

  - You are about to drop the `Plantao` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `data` to the `Registros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Registros` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Registros` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Plantao" DROP CONSTRAINT "Plantao_userId_fkey";

-- DropForeignKey
ALTER TABLE "Registros" DROP CONSTRAINT "Registros_plantao_id_fkey";

-- AlterTable
ALTER TABLE "Registros" ADD COLUMN     "data" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Plantao";

-- CreateTable
CREATE TABLE "Plantonistas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dia_plantao" TEXT NOT NULL DEFAULT 'sabado',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Plantonistas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Plantonistas_userId_key" ON "Plantonistas"("userId");

-- AddForeignKey
ALTER TABLE "Plantonistas" ADD CONSTRAINT "Plantonistas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registros" ADD CONSTRAINT "Registros_plantao_id_fkey" FOREIGN KEY ("plantao_id") REFERENCES "Plantonistas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
