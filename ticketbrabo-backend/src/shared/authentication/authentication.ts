import { sign } from "jsonwebtoken";

export abstract class Authentication {
    protected user: any;

    protected JWT_SECRET = String(process.env.JWT_SECRET);
    protected JWT_EXPIRES = process.env.JWT_EXPIRES;

    async makeAuth(options?: any) {

        const userAuth = await this.getUserByAuthMethod(options);
        this.user = await this.getUserIfAlreadySaved(userAuth)

        if (!this.user) {
            this.user = await this.saveNewUser(userAuth)
        }

        return this.generateJWTToken();

    }

    async generateJWTToken(): Promise<string> {
        return await sign({ id: this.user.id, email: this.user.email },
            this.JWT_SECRET, { expiresIn: this.JWT_EXPIRES });
    }


    abstract getUserByAuthMethod(options?: any): any;
    abstract getUserIfAlreadySaved(user: any): any;
    abstract saveNewUser(user: any): Promise<any>;
}