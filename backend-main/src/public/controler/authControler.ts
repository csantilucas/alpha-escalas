// src/controllers/AuthController.ts
import type { Request, Response } from "express";
import { authService } from "../../containers/auth.container.js";

const auth = authService;

export class AuthController {
    async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, pass } = req.body;

            if (!email || !pass) {
                return res.status(400).json({ error: "Email and password are required." });
            }

            const result = await auth.login({ email, pass });
            return res.status(200).json(result);
        } catch (error: any) {
            
            // Retorna 401 Unauthorized para erros de credenciais
            console.log(error)
            return res.status(401).json({ error: error.message });
        }
    }
}