// prisma.config.ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

const user = process.env["POSTGRES_USER"];
const password = process.env["POSTGRES_PASSWORD"];
const dbName = process.env["POSTGRES_DB"];
const host = process.env["POSTGRES_HOST"] ?? "localhost";

const connectionUrl =
  process.env["DATABASE_URL"] ??
  `postgresql://${user}:${password}@${host}:5432/${dbName}?schema=public`;

export default defineConfig({
  schema: "prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "npx tsx ./src/seed/seed.ts",
  },
  datasource: {
    url: connectionUrl,
  },
});
