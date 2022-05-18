import { CategoriaProduto } from "@models/categoria-produto-model";
import { Produto } from "@models/produto-model";
import categoriaProdutoRepo from "@repos/categoriaProduto-repo";
import produtoRepo from "@repos/produto-repo";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();
const {CREATED, OK} = StatusCodes;

export const paths = {
    add: '/add'
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

export default router;