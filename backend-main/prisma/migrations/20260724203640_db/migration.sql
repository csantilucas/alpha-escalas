-- CreateTable
CREATE TABLE "atendimentos" (
    "id" TEXT NOT NULL,
    "ticketZpro" TEXT,
    "ticketTomticket" TEXT,
    "sincronizado" BOOLEAN NOT NULL DEFAULT false,
    "clienteId" TEXT,
    "cnpj" TEXT NOT NULL,
    "atendente" TEXT,
    "protocolo" TEXT,
    "nomeContato" TEXT,
    "tipoAtendimento" TEXT,
    "status" TEXT NOT NULL DEFAULT 'EM_ANDAMENTO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "atendimentos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "atendimentos_protocolo_key" ON "atendimentos"("protocolo");
