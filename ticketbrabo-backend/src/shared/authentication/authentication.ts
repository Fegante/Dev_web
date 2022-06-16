
export abstract class Authentication {

    authentication() {
        console.log("do auth");
        this.isAlreadySignUp();
        console.log("auth");
    }

    abstract isAlreadySignUp(): boolean;
}