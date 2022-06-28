import { Produtor } from "@models/produtor-model";
import eventoService from "@services/evento-service";
import produtorService from "@services/produtor-service";
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
    // console.log(req.headers.biscoito)

    const biscoito = verify(req.headers.biscoito as string,process.env.JWT_SECRET as string) as any
    // console.log('req.headers.biscoito as string:'+req.headers.biscoito as string)
    // console.log('process.env.JWT_SECRET as string:'+process.env.JWT_SECRET as string)
    const evento = req.body;
    evento.produtor = biscoito
    console.log('biscoito:'+biscoito.id)
    await eventoService.addOne(evento);
    return res.status(CREATED).end();
});

router.get(paths.get, async (req: Request, res: Response) => {
    return res.status(CREATED).send({data: await eventoService.getAll()});
});
export default router;