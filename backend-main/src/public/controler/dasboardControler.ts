// src/controler/dashboardControler.ts
import type { Request, Response } from "express";
import { externalApiService } from "../services/externalApiService.js";

export class DashboardController {
  getTicketsReport = async (req: Request, res: Response): Promise<Response> => {
    try {
      // Captura as datas enviadas pelo front-end (Query Params)
      const { startDate, endDate } = req.query;

      if (!startDate || !endDate) {
        return res.status(400).json({ 
          error: "Os parâmetros 'startDate' e 'endDate' no formato YYYY-MM-DD são obrigatórios." 
        });
      }

      // Consome o microsserviço externo
      const dadosReport = await externalApiService.getTicketsPerUser(
        startDate as string, 
        endDate as string
      );

      return res.status(200).json(dadosReport);
    } catch (error: any) {
      console.log(error)
      return res.status(500).json({ error: error.message || "Erro interno ao processar métricas de chamados." });
    }
  };
}