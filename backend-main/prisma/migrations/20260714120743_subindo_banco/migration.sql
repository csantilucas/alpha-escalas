/*
  Warnings:

  - The values [student,mentor] on the enum `TypeUsers` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `acessToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `recoveryToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tokenRecovery` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `slackID` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TypeUsers_new" AS ENUM ('atendente', 'admin', 'gestor');
ALTER TABLE "public"."User" ALTER COLUMN "typeUser" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "typeUser" TYPE "TypeUsers_new" USING ("typeUser"::text::"TypeUsers_new");
ALTER TYPE "TypeUsers" RENAME TO "TypeUsers_old";
ALTER TYPE "TypeUsers_new" RENAME TO "TypeUsers";
DROP TYPE "public"."TypeUsers_old";
ALTER TABLE "User" ALTER COLUMN "typeUser" SET DEFAULT 'atendente';
COMMIT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "acessToken",
DROP COLUMN "createAt",
DROP COLUMN "recoveryToken",
DROP COLUMN "refreshToken",
DROP COLUMN "tokenRecovery",
DROP COLUMN "updateAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "slackID" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "typeUser" SET DEFAULT 'atendente';

-- CreateTable
CREATE TABLE "Plantao" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Plantao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Plantao" ADD CONSTRAINT "Plantao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
