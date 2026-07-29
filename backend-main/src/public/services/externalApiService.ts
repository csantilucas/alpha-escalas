// src/services/externalApiService.ts
import dns from "node:dns";
import prisma from "../../config/postgres.js";
import axios from "axios";

// 🟢 Força o Node.js a priorizar o IPv4 (evita erro ENOTFOUND no Tomticket)
dns.setDefaultResultOrder("ipv4first");

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

export interface RelatorioUsuarioTomticket {
  operator_id: string;
  nome_usuario: string;
  quantidade_protocolos: number;
  protocolos: string[];
  media_avaliacao: number;
  evaluations: Record<string, number>;
  chats_com_evaluation: number;
  chats_sem_evaluation: number;
  clientes_atendidos: Array<{ nome: string; nota: number | null }>;
  tempo_medio_minutos: number;
  categorias_atendidas: string[];
}

class ExternalApiService {
  private baseUrl = "https://api.alphasoftware.com.br/v2/api/external/9c27a2a0-d676-4aea-a0ed-8da908a4acb6/dash";

  private tomticketToken = process.env.TOMTICKET_BEARER_TOKEN || "6db3d0d76429766ec8d65e5f10b8e481";
  private tomticketBaseUrl = "https://api.tomticket.com/v2.0/ticket/list";
  private pausaMs = 2000;

  private departamentosPermitidos = [
    "027fd3ec45b544fe6f6883acbdd7c708",
    "73b564f3d8aa09307fe0247af5272b08",
    "e52a5aeee346806df68ee2d5579a7ac4",
    "19284e98480603eb12016def694ccfdd"
  ];

  private operadoresPermitidos: Record<string, string> = {
    "47330795a4e381bb7ec0107268844721": "Gabriel Henrique",
    "4d978d684d1d656c39911bbfe518fd1d": "Guilherme Dalanhol",
    "d1147111ee07c84b9d1f0932bb96050c": "Geneses Souza",
    "600c5502c892d8d6e0944415a134abfa": "Thiago José",
    "b7493715e9fc105eb8c789b38ab31de6": "Edmilson Júnior",
    "c9a61fe4e48236b7527a7bacb839b19d": "Gustavo Maciel",
    "1c1460c7111c735a48bd74e7c56a253d": "Pedro Mittmann",
    "37a2b3203d2b93aae2d3bd9123044d53": "Kariny Moreira de Paula"
  };

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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

  private async fetchTomticketReportFromApi(dataInicioStr: string, dataFimStr: string): Promise<RelatorioUsuarioTomticket[]> {
    const relatorioUsuarios: Record<string, any> = {};

    Object.keys(this.operadoresPermitidos).forEach(opId => {
      relatorioUsuarios[opId] = {
        operator_id: opId,
        nome_usuario: this.operadoresPermitidos[opId],
        quantidade_protocolos: 0,
        protocolos: [],
        media_avaliacao: "0.00",
        evaluations: { nota_5: 0, nota_4: 0, nota_3: 0, nota_2: 0, nota_1: 0, nota_0: 0 },
        chats_com_evaluation: 0,
        chats_sem_evaluation: 0,
        clientes_atendidos: [],
        tempo_medio_minutos: 0,
        categorias_atendidas: [],
        _soma_notas: 0,
        _soma_tempo_segundos: 0
      };
    });

    for (const deptoId of this.departamentosPermitidos) {
      let pagina = 1;
      let totalPaginas = 1;

      while (pagina <= totalPaginas) {
        try {
          const response = await axios.get(this.tomticketBaseUrl, {
            params: { page: pagina, department_id: deptoId },
            headers: { Authorization: `Bearer ${this.tomticketToken}` }
          });

          const body = response.data;
          if (!body || body.error === true) break;

          const ticketsPage = body.data || [];
          if (body.pages && pagina === 1) totalPaginas = body.pages;
          if (ticketsPage.length === 0) break;

          for (const ticket of ticketsPage) {
            const dataTicketStr = ticket.creation_date ? ticket.creation_date.substring(0, 10) : "";

            // 🟢 Pula tickets que estejam fora do intervalo de datas
            if (dataTicketStr > dataFimStr || dataTicketStr < dataInicioStr) {
              continue;
            }

            const opId = ticket.operator?.id;
            if (!opId || !this.operadoresPermitidos[opId]) continue;

            const userRecord = relatorioUsuarios[opId];
            userRecord.quantidade_protocolos++;
            userRecord.protocolos.push(ticket.protocol);

            if (ticket.category?.name && !userRecord.categorias_atendidas.includes(ticket.category.name)) {
              userRecord.categorias_atendidas.push(ticket.category.name);
            }

            userRecord._soma_tempo_segundos += Number(ticket.work_time) || 0;

            const nomeCliente = ticket.customer?.name || "Não identificado";
            const nota = ticket.evaluation?.grade;

            if (nota !== null && nota !== undefined) {
              userRecord.chats_com_evaluation++;
              userRecord._soma_notas += Number(nota);
              userRecord.evaluations[`nota_${nota}`] = (userRecord.evaluations[`nota_${nota}`] || 0) + 1;
              userRecord.clientes_atendidos.push({ nome: nomeCliente, nota: Number(nota) });
            } else {
              userRecord.chats_sem_evaluation++;
              userRecord.clientes_atendidos.push({ nome: nomeCliente, nota: null });
            }
          }

          pagina++;
          await this.delay(this.pausaMs);

        } catch (error: any) {
          console.error(`Erro na página ${pagina} do depto ${deptoId}:`, error.message);
          break;
        }
      }
    }

    return Object.values(relatorioUsuarios).map(user => {
      const mediaNotas = user.chats_com_evaluation > 0
        ? (user._soma_notas / user.chats_com_evaluation).toFixed(2)
        : "0.00";

      const tempoMedioMinutos = user.quantidade_protocolos > 0
        ? Math.round((user._soma_tempo_segundos / user.quantidade_protocolos) / 60)
        : 0;

      delete user._soma_notas;
      delete user._soma_tempo_segundos;

      return {
        ...user,
        media_avaliacao: Number(mediaNotas),
        tempo_medio_minutos: tempoMedioMinutos
      };
    });
  }

  async getTomticketReport(startDate: string, endDate: string, forceRefresh = false): Promise<any> {
    if (!forceRefresh) {
      const cachedReport = await prisma.tomticketReportCache.findUnique({
        where: {
          startDate_endDate: { startDate, endDate }
        }
      });

      if (cachedReport) {
        console.log(`⚡ [Prisma Cache] Relatório (${startDate} até ${endDate}) retornado do banco.`);
        return cachedReport.data;
      }
    }

    console.log(`🐢 [Tomticket API] Buscando dados atualizados na API externa...`);
    const reportData = await this.fetchTomticketReportFromApi(startDate, endDate);

    await prisma.tomticketReportCache.upsert({
      where: {
        startDate_endDate: { startDate, endDate }
      },
      update: {
        data: reportData as any,
        updatedAt: new Date()
      },
      create: {
        startDate,
        endDate,
        data: reportData as any
      }
    });

    return reportData;
  }
}

export const externalApiService = new ExternalApiService();