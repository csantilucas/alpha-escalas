// src/services/dashboardService.ts
import api from "../lib/api";

export interface TicketUserData {
  email: string;
  name: string;
  qtd_em_atendimento: string;
  qtd_pendentes: string;
  qtd_resolvidos: string;
  qtd_por_usuario: string;
  tma: {
    minutes: number;
  };
  tme: {
    minutes: number;
  };
  media_avaliacao: number | null;
}

class DashboardServices {
  // GET /dashboard/tickets?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
  async getTicketsReport(startDate: string, endDate: string): Promise<TicketUserData[]> {
    if (!startDate || !endDate) {
      throw new Error("As datas de início e fim são obrigatórias.");
    }
    
    const response = await api.get("/dashboard/tickets", {
      params: { startDate, endDate }
    });
    
    return response.data;
  }
}

export const dashboardService = new DashboardServices();