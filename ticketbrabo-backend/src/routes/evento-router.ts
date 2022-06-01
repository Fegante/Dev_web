import { Produtor } from "@models/produtor-model";
import eventoService from "@services/evento-service";
import produtorService from "@services/produtor-service";
import { Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

const {CREATED, OK} = StatusCodes;

export const paths = {
    add: '/add'
};


router.post(paths.add, async (req: Request, res: Response) => {
    await eventoService.addOne(req.body);
    return res.status(CREATED).end();
});

export default router;