import { UserRepository } from "../repository/userRepo.js";


interface User {
    name: string;
    email: string;
    pass: string;
    id_atendente?:string | null;

}

export class UserService {

    private user: UserRepository;
    constructor(userRepository: UserRepository) {
        this.user = userRepository;
    }

    async createUser(data: User): Promise<User> {
        const user = await this.user.create(data);
        return user;
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const user = await this.user.findByEmail(email);
        return user;
    }

    async getAllUsers(): Promise<User[]> {
        const users = await this.user.findAll();
        return users;
    }

    

    

    

}