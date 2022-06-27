import produtorService from "@services/produtor-service";

export abstract class Authentication {
    
    // TODO: refactor dot env access
    protected JWT_SECRET = String(process.env.JWT_SECRET);
    protected JWT_EXPIRES = process.env.JWT_EXPIRES;

    async authentication(options?: any) {
        const user = await this.getUserByAuthMethod(options);
        await this.isAlreadySignUp(user);
        return this.generateJWTToken(user);;
    }

    async isAlreadySignUp(user: any) {
        const produtor = await produtorService.findByEmail(user?.email);
        if(produtor == null) {
            throw new Error("Usuario ainda não cadastrado;")
        }
        return;
    }


    abstract getUserByAuthMethod(options?: any): any;
    abstract generateJWTToken(user: any): Promise<string>;
}