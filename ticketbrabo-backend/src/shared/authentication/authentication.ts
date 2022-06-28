import produtorService from "@services/produtor-service";

export abstract class Authentication {
    
    // TODO: refactor dot env access
    protected JWT_SECRET = String(process.env.JWT_SECRET);
    protected JWT_EXPIRES = process.env.JWT_EXPIRES;

    async authentication(options?: any) {
        let user = await this.getUserByAuthMethod(options);
        user = await this.isAlreadySignUp(user)
        if(user) {
            return this.generateJWTToken(user);
        }
    
        return this.saveNewUser(user);;
    }

    async isAlreadySignUp(user: any): Promise<any> {
        return await produtorService.findByEmail(user.email);
    }


    abstract getUserByAuthMethod(options?: any): any;
    abstract generateJWTToken(user: any): Promise<string>;
    abstract saveNewUser(user: any): Promise<any>;
}