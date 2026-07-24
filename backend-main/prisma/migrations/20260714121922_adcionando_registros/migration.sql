-- CreateTable
CREATE TABLE "Registros" (
    "id" TEXT NOT NULL,
    "plantao_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Registros_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Registros" ADD CONSTRAINT "Registros_plantao_id_fkey" FOREIGN KEY ("plantao_id") REFERENCES "Plantao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registros" ADD CONSTRAINT "Registros_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
