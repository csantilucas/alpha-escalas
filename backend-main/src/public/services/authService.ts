// src/services/UserService.ts
import { UserRepository } from "../repository/userRepo.js";
import { TokenConfig } from "../../config/tokenConfig.js"; // Importamos a classe para usar os métodos estáticos
import { EncryptedPass } from "../../config/encryptedPass.js";


interface loginRequest {
    email: string;
    pass: string;
}

interface loginResponse {
    accessToken: string;
    user: {
        id: string; 
        name: string;
        email: string;
        typeUser: string;
    };
}

export class AuthService {

    //injecting dependencies
    private user: UserRepository;
    private encryptedPass: EncryptedPass; 
    private tokenConfig: TokenConfig;
    //injecting dependencies
    constructor(userRepository: UserRepository, encryptedPass: EncryptedPass, tokenConfig: TokenConfig) {
        this.user = userRepository;
        this.encryptedPass = encryptedPass;
        this.tokenConfig = tokenConfig;
    }

    async login(data: loginRequest): Promise<loginResponse> {
        //procurar o usuário pelo email
        const user = await this.user.findByEmail(data.email);
        if (!user) {
            throw new Error("User not found");
        }

        //validar a senha
        const passValid = await this.encryptedPass.comparePassword(data.pass, user.pass);
        if (!passValid) {
            throw new Error("Invalid password");
        }

        //objeto para os tokens
        const userPayload = {
            userId: user.id,
            name: user.name,
            email: user.email,
            typeUser: user.typeUser
        };

        // Criar os token
        const accessToken = await this.tokenConfig.generateAccessToken(userPayload);
       
        return {
            accessToken,
            user: {
                id: String(user.id), 
                name: user.name,
                email: user.email,
                typeUser: user.typeUser
            }
        };
    }
}