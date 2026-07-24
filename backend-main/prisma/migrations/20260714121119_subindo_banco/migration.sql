/*
  Warnings:

  - A unique constraint covering the columns `[id_atendente]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "id_atendente" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_id_atendente_key" ON "User"("id_atendente");
