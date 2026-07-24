import { UserService } from "../public/services/userService.js";
import { UserRepository } from "../public/repository/userRepo.js";

export const userRepository = new UserRepository()

export const userService = new UserService(userRepository)