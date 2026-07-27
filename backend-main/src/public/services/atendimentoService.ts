import type { AtendimentoRepository, AtendimentoFilterQuery } from "../repository/atendimentoRepo.js";
import type { DashboardMetricsQuery } from "../repository/atendimentoRepo.js";


export interface CreateAtendimentoInput {

    ticketZpro?: string;

    clienteId?: string;

    cnpj: string;

    atendente?: string;

    protocolo?: string;

    nomeContato?: string;

    tipoAtendimento?: string;

}



export interface UpdateAtendimentoInput {

    protocolo: string;

    ticketTomticket?: string;

    tipoAtendimento?: string;

    atendente?: string;

    status?: string;

}



export class AtendimentoService {

    private atendimentoRepo: AtendimentoRepository;



    constructor(atendimentoRepository: AtendimentoRepository) {

        this.atendimentoRepo = atendimentoRepository;

    }

    async getMetrics(filters: DashboardMetricsQuery) {
  return await this.atendimentoRepo.getDashboardMetrics(filters);
}

async getAtendimentosPorAnalista(nomeAnalista: string, filters: AtendimentoFilterQuery) {
  if (!nomeAnalista) {
    throw new Error("O nome do analista é obrigatório.");
  }

  return await this.atendimentoRepo.findWithFilters({
    ...filters,
    atendente: nomeAnalista,
  });
}

    async createAtendimento(data: CreateAtendimentoInput) {

        if (!data.cnpj) {

            throw new Error("O campo 'cnpj' é obrigatório.");

        }



        if (data.protocolo) {

            const exists = await this.atendimentoRepo.findByProtocolo(data.protocolo);

            if (exists) {

                throw new Error("Já existe um atendimento registrado com este protocolo.");

            }

        }


        


        return await this.atendimentoRepo.create({

            ticketZpro: data.ticketZpro ? String(data.ticketZpro) : null,

            clienteId: data.clienteId ? String(data.clienteId) : null,

            cnpj: String(data.cnpj),

            atendente: data.atendente || null,

            protocolo: data.protocolo || null,

            nomeContato: data.nomeContato || null,

            tipoAtendimento: data.tipoAtendimento || null,

            sincronizado: false,

        });

    }



    async updateAtendimento(data: UpdateAtendimentoInput) {

        if (!data.protocolo) {

            throw new Error("O 'protocolo' é obrigatório para atualização.");

        }



        const atendimento = await this.atendimentoRepo.findByProtocolo(data.protocolo);

        if (!atendimento) {

            throw new Error("Atendimento não encontrado para o protocolo informado.");

        }



        const updateData: any = {

            sincronizado: true, // 🟢 Sincronizado ao receber os dados do Tomticket

        };



        if (data.ticketTomticket) updateData.ticketTomticket = String(data.ticketTomticket);

        if (data.tipoAtendimento) updateData.tipoAtendimento = data.tipoAtendimento;

        if (data.atendente) updateData.atendente = data.atendente;

        if (data.status) updateData.status = data.status;



        return await this.atendimentoRepo.update(atendimento.id, updateData);

    }



    async getAtendimentos(filters: AtendimentoFilterQuery) {

        return await this.atendimentoRepo.findWithFilters(filters);

    }

}

