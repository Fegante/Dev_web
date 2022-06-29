import { Authentication } from "./authentication";

export class LocalStrategyAuth extends Authentication {
    getUserByAuthMethod(options?: any): any {
        throw new Error("Get token para local auth - Não suportado")
    }

    async getUserIfAlreadySaved(user: any): Promise<any> {
        return this.user;
    }

    saveNewUser(user: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}