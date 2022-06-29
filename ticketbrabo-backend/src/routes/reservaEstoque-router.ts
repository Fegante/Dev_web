import reservaEstoqueService from "@services/reservaEstoque-service";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

export const paths =  {
    get : "/query",
    getByEventoId: '/evento/:id'
}

router.get(paths.get, async (req, res) => {
    const reservaEstoque = await reservaEstoqueService.getAll();
    return res.send({data: reservaEstoque});
});

router.get(paths.getByEventoId, async(req, res) => {
    const reservaEstoque = await reservaEstoqueService.getByWhere({ evento: {id: req.params.id} });
    return res.send({data: reservaEstoque});
});

export default router;