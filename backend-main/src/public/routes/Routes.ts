// src/routes/Routes.ts
import express from "express";
import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";
import plantaoRoutes from "./plantonistaRoutes.js";
import registroRoutes from "./registroRoutes.js";
import dashboardRoutes from "./dashboardRoutes.js";
import atendimentoRoutes from "./atendimentoRoutes.js"; // 🟢 Import da nova rota

const registerRoutes = (app: express.Application): void => {

    app.use(express.json());


    app.use((req, res, next) => {
        const defaultOrigins = [
            "http://localhost:3000",
            "http://localhost:5004",
            "http://127.0.0.1:3000",
            "http://127.0.0.1:5004",
            "http://192.168.1.9:5004",
            "http://192.168.1.9:3000",
        ];

        const envOrigins = process.env.CORS_ORIGINS
            ? process.env.CORS_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean)
            : [];

        const allowedOrigins = [...new Set([...defaultOrigins, ...envOrigins])];
        const origin = req.headers.origin;

        if (origin && allowedOrigins.includes(origin)) {
            res.setHeader("Access-Control-Allow-Origin", origin);
        } else if (!origin) {
            res.setHeader("Access-Control-Allow-Origin", "http://localhost:5004");
        }

        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

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
    app.use('/atendimentos', atendimentoRoutes); 
};

export default registerRoutes;