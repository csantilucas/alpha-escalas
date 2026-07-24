// src/services/index.ts

export { userService } from "./userService";
export { plantonistaService } from "./plantonistaService";
export { registroService } from "./registroService";
export { dashboardService } from "./dashboardService"; // 🟢 Adicionado

// Tipagens utilitárias para quando construir os formulários
export type { LoginModel, CreateUserModel } from "./userService";
export type { CreateRegistroModel, UpdateDatesModel, GerarEscalaModel } from "./registroService";
export type { TicketUserData } from "./dashboardService"; // 🟢 Adicionado