import { CategoriaProduto } from "@models/categoria-produto-model";
import { Produto } from "@models/produto-model";
import categoriaProdutoRepo from "@repos/categoriaProduto-repo";
import produtoRepo from "@repos/produto-repo";
import { AuthorizationService } from "@shared/authorization/authorization-service";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();
const {CREATED, OK} = StatusCodes;

export const paths = {
    add: '/add',
    getStatistic: '/estatistica'
};

router.get(paths.add, async (req: Request, res: Response) => {
    console.log("Aqui")
    const produto = new Produto();
    const categoria = new CategoriaProduto();

    categoria.descricao = 'Vegano';
    categoria.nome = 'Água';
    

    produto.categoriaProduto = categoria;
    produto.preco = 5.50;
    produto.quantidadeTotal = 300;

    
    await categoriaProdutoRepo.save(categoria);
    const resp = await produtoRepo.save(produto);
    const result = await produtoRepo.getOne(produto.id);
    
    return res.status(CREATED).send(result).end();
})

router.get(paths.getStatistic, AuthorizationService.isValidToken, async (req, res) => {
    
});

export default router;