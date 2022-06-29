import produtorService from "@services/produtor-service";
import { Request, Response } from "express";
import { verify } from "jsonwebtoken";

export class AuthorizationService {

    static async decodeToken(req: Request) {
        const token = verify(req.headers.token as string, process.env.JWT_SECRET as string) as any;
        const user = await produtorService.findOneById(token.id);
       
        return user;
    }
    static async isValidToken(req: Request, res: Response, next: any) {
        try {
           const user = AuthorizationService.decodeToken(req);
            
            if(!user){
                return res.send({type: 'error', message: 'Usuário inválido'});
            }

            return next();
            
        } catch (err) {
            console.log(err);
            return res.send({type: 'error', message: err});
        }
    }
}