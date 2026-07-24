// src/config/server.ts
import "reflect-metadata";
import { connectPostgres } from "./postgres.js";
import express from "express";
import registerRoutes from "../public/routes/Routes.js";

const app = express();
app.use(express.json());
registerRoutes(app);

export async function bootstrap() {
  await connectPostgres();
}

export default app;