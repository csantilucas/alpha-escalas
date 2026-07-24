// src/routes/authRoutes.ts
import { Router } from "express";
import { AuthController } from "../controler/authControler.js";

const router = Router();
const authController = new AuthController();

// POST /auth/login -> Endpoint de Login
router.post("/login", authController.login);

export default router;