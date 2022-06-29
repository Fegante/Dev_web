import produtorService from "@services/produtor-service";
import { Authentication } from "./authentication";

export class LocalStrategyAuth extends Authentication {
    getUserByAuthMethod(options?: any): any {
        return produtorService.findByEmail(options.email);
    }

    async getUserIfAlreadySaved(user: any): Promise<any> {
        return user;
    }

    saveNewUser(user: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}