import { Authentication } from "./authentication";

export class LocalStrategyAuth extends Authentication {
    
    getUserByAuthMethod(options?: any): any {
        throw new Error("Get token para local auth - Não suportado")
    }
    generateJWTToken(user: any): Promise<string> {
        throw new Error("Token para local auth - Não suportado")
    }

    async isAlreadySignUp(user: any) {
        if(user == null) {
            throw new Error("Usuário ainda não cadastrado.");
        }
        return;
    }
}