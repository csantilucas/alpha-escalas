// src/services/externalApiService.ts
import axios from "axios";

export interface TicketUserData {
  email: string;
  name: string;
  qtd_em_atendimento: string;
  qtd_pendentes: string;
  qtd_resolvidos: string;
  qtd_por_usuario: string;
  tma: { minutes: number };
  tme: { minutes: number };
  media_avaliacao: number | null;
}

class ExternalApiService {
  // 🟢 URL limpa sem parâmetros fixos e sem aspas quebradas
  private baseUrl = "https://api.alphasoftware.com.br/v2/api/external/9c27a2a0-d676-4aea-a0ed-8da908a4acb6/dash";

  async getTicketsPerUser(startDate: string, endDate: string): Promise<TicketUserData[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/ticketsPerUser`, {
        params: { startDate, endDate },
        headers: {
          Authorization: `Bearer e45d9482842e70d8c36048cbb1fd287f355b7aac870433014139ebcb6eabd718` 
        }
      });

      if (response.data && response.data.success) {
        return response.data.data;
      }
      return [];
    } catch (error: any) {
      throw new Error(`Falha na comunicação com o microsserviço externo: ${error.message}`);
    }
  }
}

export const externalApiService = new ExternalApiService();