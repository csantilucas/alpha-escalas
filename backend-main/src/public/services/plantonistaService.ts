import type { PlantonistaRepository } from "../repository/plantonistaRepo.js";
import type { UserRepository } from "../repository/userRepo.js";

interface PlantonistaInput {
  userId: string; // 👈 Apenas userId na interface
}

export class PlantonistaService {
  private plantonista: PlantonistaRepository;
  private user: UserRepository;

  constructor(plantonistaRepository: PlantonistaRepository, userRepository: UserRepository) {
    this.plantonista = plantonistaRepository;
    this.user = userRepository;
  }

  async createPlantonista(data: PlantonistaInput) {
    const userExists: any = await this.user.findById(data.userId);
    if (!userExists) {
      throw new Error('Usuário não encontrado.');
    }

    const alreadyPlantonista = await this.plantonista.findByUserId(data.userId);
    if (alreadyPlantonista) {
      throw new Error('Este usuário já está vinculado como plantonista.');
    }

    const plantonistaData = {
      nome: userExists.name, // 👈 Puxa o nome diretamente da tabela User
      userId: data.userId,
      proxima_data: new Date(), // 👈 Placeholder inicial (será atualizado ao criar o Registro)
    };

    return await this.plantonista.create(plantonistaData);
  }

  
  async getPlantonistas() {
    return await this.plantonista.findAllOrderedByRecent();
  }

  async getPlantonistaByUserId(userId: string) {
    const plantonista = await this.plantonista.findByUserId(userId);
    if (!plantonista) {
      throw new Error('Plantonista não encontrado para este usuário.');
    }
    return plantonista;
  }
}