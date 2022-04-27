import eventoService from "@services/evento-service";
import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

const {CREATED, OK} = StatusCodes;

export const paths = {
    add: '/add'
};


router.post(paths.add, async (req: Request, res: Response) => {
    const {evento} = req.body;
    
    await eventoService.addOne(evento);

    return res.status(CREATED).end();
});

export default router;