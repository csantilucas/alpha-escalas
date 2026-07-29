// src/controler/dashboardControler.ts
import type { Request, Response } from "express";
import { externalApiService } from "../services/externalApiService.js";

export class DashboardController {
  // 1. Rota original que consome a API da Alpha Software
  getTicketsReport = async (req: Request, res: Response): Promise<Response> => {
    try {
      // Captura as datas enviadas pelo front-end (Query Params)
      const { startDate, endDate } = req.query;

      if (!startDate || !endDate) {
        return res.status(400).json({ 
          error: "Os parâmetros 'startDate' e 'endDate' no formato YYYY-MM-DD são obrigatórios." 
        });
      }

      // Consome o microsserviço externo com fallback de segurança
      let dadosReport: any[] = [];
      try {
        dadosReport = await externalApiService.getTicketsPerUser(
          startDate as string, 
          endDate as string
        );
      } catch (externalError: any) {
        console.warn(
          "⚠️ [DashboardController] Microsserviço externo indisponível. Retornando fallback vazio para não travar a interface.",
          externalError.message || externalError
        );
        dadosReport = [];
      }

      return res.status(200).json(dadosReport);
    } catch (error: any) {
      console.error("[DashboardController Error]:", error);
      return res.status(500).json({ 
        error: error.message || "Erro interno ao processar métricas de chamados." 
      });
    }
  };

  // 🟢 2. Nova Rota para consumir o relatório consolidado do Tomticket
  getTomticketReport = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { startDate, endDate, refresh } = req.query;

      if (!startDate || !endDate) {
        return res.status(400).json({ 
          error: "Os parâmetros 'startDate' e 'endDate' no formato YYYY-MM-DD são obrigatórios." 
        });
      }

      const forceRefresh = refresh === "true";

      // Consome o serviço do Tomticket (busca do PostgreSQL ou consulta a API externa)
      let dadosTomticket: any[] = [];
      try {
        dadosTomticket = await externalApiService.getTomticketReport(
          startDate as string, 
          endDate as string, 
          forceRefresh
        );
      } catch (externalError: any) {
        console.warn(
          "⚠️ [DashboardController] Falha ao obter relatório do Tomticket. Retornando array vazio.",
          externalError.message || externalError
        );
        dadosTomticket = [];
      }

      return res.status(200).json(dadosTomticket);
    } catch (error: any) {
      console.error("[DashboardController Error - Tomticket]:", error);
      return res.status(500).json({ 
        error: error.message || "Erro interno ao processar relatório do Tomticket." 
      });
    }
  };
}