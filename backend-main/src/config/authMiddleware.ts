import type { Request, Response, NextFunction } from "express";
import { tokenConfig } from "../containers/token.container.js";


import dotenv from "dotenv"
//dotenv.config()

declare global {
    namespace Express {
        interface Request {
            user?: any; // Replace 'any' with your actual user type
        }
    }
}

export class AuthMiddleware {

    constructor() {
        this.auth = this.auth.bind(this);
        this.authAdmin = this.authAdmin.bind(this);
    }

    async auth(req: Request, res: Response, next: NextFunction) {
    let token = req.header("Authorization");
    if (!token) return res.status(401).send("access denied");

    if (token.startsWith("Bearer ")) {
        token = token.slice(7);
    }

    try {
       
        const userVerified = await tokenConfig.verifyAccessToken(token); 
        req.user = userVerified;
        return next(); 
    } catch (error) {
        return res.status(401).send("Invalid Token - access denied");
    }
}

    async authAdmin(req: Request, res: Response, next: NextFunction) {

        console.log("req.user carregado do token:", req.user);

        if (req.user && req.user.typeUser === "admin") {
            return next();
        }
        
        return res.status(401).json({ error: "Access denied - Not admin" });

    }

}