// src/config/postgres.ts
import dotenv from "dotenv";
import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";

dotenv.config();

const host = process.env.POSTGRES_HOST ?? "localhost";

const connectionString =
  process.env.DATABASE_URL ??
  `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${host}:5432/${process.env.POSTGRES_DB}?schema=public`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export async function connectPostgres() {

  try {
    await prisma.$connect();
    console.log("PostgreSQL conectado");
    return prisma;
  }
  catch (error) {
    console.error("❌ Erro ao conectar no banco de dados:", error);
    process.exit(1);
  }
}

export default prisma;