import { Authentication } from "./authentication";

export class LocalStrategyAuth extends Authentication {
    
    isAlreadySignUp(): boolean {
        console.log("Already signup");
        return true;
    }
    
}