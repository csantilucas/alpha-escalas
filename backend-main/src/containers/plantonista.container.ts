import { PlantonistaRepository } from "../public/repository/plantonistaRepo.js";
import { PlantonistaService } from "../public/services/plantonistaService.js";
import { userRepository } from "./user.container.js";

const plantonistaRespository = new PlantonistaRepository()

export const plantonistaService = new PlantonistaService(plantonistaRespository, userRepository);