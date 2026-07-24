import { RegistroRepository } from "../public/repository/registroRepo.js";
import { RegistroService } from "../public/services/registroService.js";
import { userRepository } from "./user.container.js";
import { PlantonistaRepository } from "../public/repository/plantonistaRepo.js"; 

const registroRepository = new RegistroRepository();
const plantonistaRepository = new PlantonistaRepository();


export const registroService = new RegistroService(registroRepository, userRepository, plantonistaRepository);