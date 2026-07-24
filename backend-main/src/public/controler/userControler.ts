// src/controllers/UserController.ts
import type { Request, Response } from "express";

import { userService } from "../../containers/user.container.js";
import { encryptedPass } from "../../containers/token.container.js";
import { error } from "node:console";


export class UserController  {


    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, pass, id_atendente } = req.body;

            // ✅ CORREÇÃO: Validar apenas os obrigatórios (id_atendente fica de fora)
            if (!name || !email || !pass) {
                return res.status(400).json({ 
                    error: "Missing required fields: name, email, or pass." 
                });
            }

            const encryptedPassword = await encryptedPass.encryptPassword(pass);

            const existingUser = await userService.getUserByEmail(email);   
            if (existingUser) {
                return res.status(400).json({ error: "Email already in use." });
            }

            // Envia o id_atendente (ele vai como string ou undefined/null se não for enviado)
            const newUser = await userService.createUser({ 
                name, 
                email, 
                pass: encryptedPassword,
                id_atendente 
            });
            
            const { pass: _, ...userWithoutPassword } = newUser;

            return res.status(201).json(userWithoutPassword);
        } catch (error: any) {
            console.log(error)
            return res.status(500).json({ error: error.message });
        }
    }

    async getAll (req: Request, res: Response): Promise<Response> {
        try {
            const users = await userService.getAllUsers();
            
            // Mapeia o resultado para entregar estritamente o id e o name
            const mappedUsers = users.map(user => ({
                id: (user as any).id, // Garante acesso ao ID gerado pelo Prisma
                name: user.name
            }));

            return res.status(200).json(mappedUsers);
        } catch (error: any) {
            console.log(error)
            return res.status(500).json({ error: error.message });
        }
    }

   
    
}