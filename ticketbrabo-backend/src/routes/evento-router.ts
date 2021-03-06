import eventoService from "@services/evento-service";
import localidadeService from "@services/localidade-service";
import { AuthorizationService } from "@shared/authorization/authorization-service";
import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";


const router = Router();

const {CREATED, OK, NOT_ACCEPTABLE} = StatusCodes;

export const paths = {
    add: '/add',
    get: '/query',
    getById: '/:id',
    update: '/update/:id',
};

router.patch(paths.update, AuthorizationService.isValidToken, async (req: Request, res: Response) => {
    const token = verify(req.headers.token as string,process.env.JWT_SECRET as string) as any
    const id = req.params.id;
    const evento = req.body;
    
    evento.id = Number.parseInt(id);
    evento.localidade = await localidadeService.getIfExits(evento.localidade);

    evento.produtor = token;
    await eventoService.addOne(evento);
    return res.status(CREATED).end();
});

router.post(paths.add, AuthorizationService.isValidToken, async (req: Request, res: Response) => {
    const token = verify(req.headers.token as string,process.env.JWT_SECRET as string) as any
    
    const evento = req.body;
    evento.produtor = token;
    console.log(evento)
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

router.get(paths.getById, AuthorizationService.isValidToken, async (req: Request, res: Response) => {
    return res.status(OK).send(await eventoService.getOneById(Number.parseInt(req.params.id)));
});

router.delete(paths.getById, AuthorizationService.isValidToken, async(req: Request, res: Response) => {
    const token = verify(req.headers.token as string,process.env.JWT_SECRET as string) as any

    return res.status(OK).send(await eventoService.deleteOne(Number.parseInt(req.params.id), token.id));
});

export default router;