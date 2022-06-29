import eventoService from "@services/evento-service";
import { AuthorizationService } from "@shared/authorization/authorization-service";
import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";

const router = Router();

const {CREATED, OK, NOT_ACCEPTABLE} = StatusCodes;

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
    const user = await AuthorizationService.decodeToken(req);
    if(user) {
        return res.status(CREATED).send({data: await eventoService.getByProdutorId(user.id)});
    }

    return res.status(NOT_ACCEPTABLE).send({});
});
export default router;