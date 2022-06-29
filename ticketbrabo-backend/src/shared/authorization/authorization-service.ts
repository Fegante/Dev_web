import produtorService from "@services/produtor-service";
import { Request, Response } from "express";
import { verify } from "jsonwebtoken";

export class AuthorizationService {

    static async isValidToken(req: Request, res: Response, next: any) {
        
        try {
            const biscoito = verify(req.headers.biscoito as string, process.env.JWT_SECRET as string) as any;
            const user = await produtorService.findById(biscoito.id);
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