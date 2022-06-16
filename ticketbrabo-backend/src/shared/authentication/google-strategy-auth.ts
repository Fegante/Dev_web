import { Authentication } from "./authentication";

export class GoogleStrategyAuth extends Authentication {

    isAlreadySignUp(): boolean {
        console.log("Already signup with google");
        return true;
    }

}