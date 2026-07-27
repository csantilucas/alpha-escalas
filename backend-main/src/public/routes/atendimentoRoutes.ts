// atendimentoRoutes.ts
import { Router } from "express";
import { AtendimentoController } from "../controler/atendimentoControler.js";

const router = Router();
const atendimento = new AtendimentoController();

// Rotas existentes
router.post("/", atendimento.create);
router.patch("/atualizar", atendimento.update);
router.get("/", atendimento.getAll);

// 🟢 Novas Rotas
router.get("/metrics", atendimento.getMetrics);                   // GET /atendimentos/metrics?atendente=Pedro
router.get("/analista/:analista", atendimento.getByAnalista);       // GET /atendimentos/analista/Pedro?page=1&limit=10

export default router;