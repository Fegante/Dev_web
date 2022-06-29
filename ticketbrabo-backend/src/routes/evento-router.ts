import { Produtor } from "@models/produtor-model";
import eventoService from "@services/evento-service";
import produtorService from "@services/produtor-service";
import { AuthorizationService } from "@shared/authorization/authorization-service";
import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";

const router = Router();

const {CREATED, OK} = StatusCodes;

export const paths = {
    add: '/add',
    get: '/query'
};


router.post(paths.add, async (req: Request, res: Response) => {

    const token = verify(req.headers.token as string,process.env.JWT_SECRET as string) as any
    
    const evento = req.body;
    evento.produtor = token;
    
    await eventoService.addOne(evento);
    return res.status(CREATED).end();
});

router.get(paths.get, AuthorizationService.isValidToken, async (req: Request, res: Response) => {
    return res.status(CREATED).send({data: await eventoService.getAll()});
});
export default router;