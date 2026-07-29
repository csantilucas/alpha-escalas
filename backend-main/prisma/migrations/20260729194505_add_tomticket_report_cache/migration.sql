-- DropIndex
DROP INDEX "atendimentos_protocolo_key";

-- CreateTable
CREATE TABLE "tomticket_report_caches" (
    "id" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tomticket_report_caches_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tomticket_report_caches_startDate_endDate_key" ON "tomticket_report_caches"("startDate", "endDate");
