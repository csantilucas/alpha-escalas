// src/routes/Routes.ts
import express from "express";
import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";
import plantaoRoutes from "./plantonistaRoutes.js";
import registroRoutes from "./registroRoutes.js";
import dashboardRoutes from "./dashboardRoutes.js";

const registerRoutes = (app: express.Application): void => {
    
    app.use(express.json());

    // 🟢 CORS Middleware Dinâmico Blindado
    app.use((req, res, next) => {
        const allowedOrigins = [
            "http://localhost:3000", 
            "http://127.0.0.1:3000", 
            "http://192.168.1.27:3000"
        ];
        const origin = req.headers.origin;

        // Se a origem estiver na lista, reflete ela exatamente
        if (origin && allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
        } else if (!origin) {
            // 🟢 Fallback Crítico: Se a requisição não vier de um navegador (ex: SSR do Next.js ou Server-to-Server)
            // define um valor genérico para não quebrar a chamada interna do ecossistema
            res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        }
        
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        
        // 🟢 Resposta imediata para a requisição de Preflight (OPTIONS) do navegador
        if (req.method === "OPTIONS") {
            res.sendStatus(200);
            return;
        }

        next();
    });

    // rotas registradas
    app.use('/plantao', plantaoRoutes);
    app.use('/register', registroRoutes);
    app.use('/auth', authRoutes);
    app.use('/users', userRoutes);
    app.use('/dashboard', dashboardRoutes);
};

export default registerRoutes;