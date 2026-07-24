// src/routes/dashboardRoutes.ts
import { Router } from "express";
import { DashboardController } from "../controler/dasboardControler.js";
import { authMiddleware } from "../../containers/auth.container.js";

const router = Router();
const dashboardController = new DashboardController();

// GET /dashboard/tickets -> Rota protegida por JWT
router.get("/tickets", authMiddleware.auth, dashboardController.getTicketsReport);

export default router;