import { UserRepository } from "../public/repository/userRepo.js";
import { AuthService } from "../public/services/authService.js";
import { encryptedPass, tokenConfig } from "./token.container.js";
const userRepository = new UserRepository();
import { AuthMiddleware } from "../config/authMiddleware.js";

export const authMiddleware = new AuthMiddleware();

export const authService = new AuthService(userRepository, encryptedPass, tokenConfig);