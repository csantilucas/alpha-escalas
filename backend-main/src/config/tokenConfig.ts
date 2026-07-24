// src/config/tokenConfig.ts
import type { SignOptions, JwtPayload } from "jsonwebtoken"; 
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const secret = process.env.JWT_SECRET_ACCESS_TOKEN;
const expiresAccessTokenIn = process.env.JWT_ACCESS_TOKEN_EXPIRATION;
const secretRefreshToken = process.env.JWT_SECRET_REFRESH_TOKEN;
const secretPasswordRecovery = process.env.JWT_SECRET_PASSWORD_RECOVERY;
const expiresRefreshTokenIn = process.env.JWT_EXPIRATION_REFRESH_TOKEN;
const expiresRecoveryTokenIn = process.env.JWT_EXPIRATION_RECOVERY_TOKEN;


interface TokenPayload {
    userId: string;
    name: string;
    email: string;
    typeUser: string;
}

export class TokenConfig {
    
     async generateAccessToken(payload: TokenPayload): Promise<string> {
        if (!secret || !expiresAccessTokenIn) {
            throw new Error("JWT_SECRET_ACCESS_TOKEN or JWT_ACCESS_TOKEN_EXPIRATION is not defined in the environment variables.");
        }
        return jwt.sign(payload, secret, { expiresIn: expiresAccessTokenIn as SignOptions['expiresIn'] });
    }



    async verifyAccessToken(token: string): Promise<string | JwtPayload> {
        if (!secret) {
            throw new Error("JWT_SECRET_ACCESS_TOKEN is not defined in the environment variables.");
        }
        return jwt.verify(token, secret);   
    }



    
   
}