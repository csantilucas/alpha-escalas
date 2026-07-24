import { BaseRepository } from "./baseRepo.js";
import type { Atendimento, Prisma } from "../../../generated/prisma/index.js";
import prisma from "../../config/postgres.js";

export interface AtendimentoFilterQuery {
  page?: number;
  limit?: number;
  cnpj?: string;
  atendente?: string;
  busca?: string;
  sincronizado?: boolean;
  dataInicio?: Date;
  dataFim?: Date;
}

export class AtendimentoRepository extends BaseRepository<Atendimento> {
  constructor() {
    super(prisma.atendimento);
  }



  async findByProtocolo(protocolo: string): Promise<Atendimento | null> {
    return await prisma.atendimento.findUnique({
      where: { protocolo },
    });
  }

  async findWithFilters(filters: AtendimentoFilterQuery) {
    const page = Math.max(1, filters.page || 1);
    const limit = Math.max(1, filters.limit || 10);
    const skip = (page - 1) * limit;

    const where: Prisma.AtendimentoWhereInput = {};

    if (filters.cnpj) where.cnpj = filters.cnpj;
    if (filters.atendente) {
      where.atendente = { contains: filters.atendente, mode: "insensitive" };
    }
    if (filters.sincronizado !== undefined) {
      where.sincronizado = filters.sincronizado;
    }

    if (filters.busca) {
      where.OR = [
        { nomeContato: { contains: filters.busca, mode: "insensitive" } },
        { cnpj: { contains: filters.busca } },
        { protocolo: { contains: filters.busca } },
        { ticketZpro: { contains: filters.busca } },
        { ticketTomticket: { contains: filters.busca } },
      ];
    }

    if (filters.dataInicio || filters.dataFim) {
      where.createdAt = {};
      if (filters.dataInicio) where.createdAt.gte = filters.dataInicio;
      if (filters.dataFim) where.createdAt.lte = filters.dataFim;
    }

    const [total, data] = await Promise.all([
      prisma.atendimento.count({ where }),
      prisma.atendimento.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      data,
      pagination: {
        totalRecords: total,
        currentPage: page,
        totalPages,
        perPage: limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    };
  }
}