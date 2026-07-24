import { Router } from "express";
import { AtendimentoController } from "../controler/atendimentoControler.js";
import { authMiddleware } from "../../containers/auth.container.js";

const router = Router();
const atendimento = new AtendimentoController();

// Rotas consumidas pelo n8n ou aplicação
router.post("/", atendimento.create);
router.patch("/atualizar", atendimento.update);
router.get("/", atendimento.getAll);

export default router;