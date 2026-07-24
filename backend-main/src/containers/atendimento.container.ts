import { AtendimentoRepository } from "../public/repository/atendimentoRepo.js";
import { AtendimentoService } from "../public/services/atendimentoService.js";

const atendimentoRepository = new AtendimentoRepository();
export const atendimentoService = new AtendimentoService(atendimentoRepository);