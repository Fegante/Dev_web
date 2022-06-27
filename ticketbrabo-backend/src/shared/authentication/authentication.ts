import produtorService from "@services/produtor-service";

export abstract class Authentication {
    
    // TODO: refactor dot env access
    protected JWT_SECRET = String(process.env.JWT_SECRET);
    protected JWT_EXPIRES = process.env.JWT_EXPIRES;

    async authentication(options?: any) {
        const user = await this.getUserByAuthMethod(options);

        if(await this.isAlreadySignUp(user)) {
            return this.generateJWTToken(user);
        }
    
        return this.saveNewUser(user);;
    }

    async isAlreadySignUp(user: any): Promise<boolean> {
        const produtor = await produtorService.findByEmail(user.email);
        return produtor != null;
    }


    abstract getUserByAuthMethod(options?: any): any;
    abstract generateJWTToken(user: any): Promise<string>;
    abstract saveNewUser(user: any): Promise<any>;
}