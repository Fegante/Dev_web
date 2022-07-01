import { CategoriaProduto } from "@models/categoria-produto-model";
import { Produto } from "@models/produto-model";
import categoriaProdutoRepo from "@repos/categoriaProduto-repo";
import produtoRepo from "@repos/produto-repo";
import produtoService from "@services/produto-service";
import reservaEstoqueService from "@services/reservaEstoque-service";
import { AuthorizationService } from "@shared/authorization/authorization-service";
import { Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";


const router = Router();
const {CREATED, OK} = StatusCodes;

export const paths = {
    add: '/add',
    query: '/query',
    getStatistic: '/estatistica',
    getByProdutoId: '/:id'
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
    const resp = await produtoRepo.addOne(produto);
    const result = await produtoRepo.getOne(produto.id);
    
    return res.status(CREATED).send(result).end();
})

router.post(paths.add, async (req: Request, res: Response) => {
    const token = verify(req.headers.token as string,process.env.JWT_SECRET as string) as any

    const evento = req.body;
    evento.produtor = token;
    console.log(evento)

    await produtoService.addOne(evento);
    return res.status(CREATED).end();
});

router.get(paths.query, async (req: Request, res: Response) => {
    const token = verify(req.headers.token as string,process.env.JWT_SECRET as string) as any
    console.log(token)
    console.log(await produtoRepo.getAll(token.id))

    return res.send( {data: await produtoRepo.getAll(token.id)});
});

router.get(paths.getByProdutoId, AuthorizationService.isValidToken, async (req: Request, res: Response) => {
    const token = verify(req.headers.token as string,process.env.JWT_SECRET as string) as any

    console.log(req.params)
    return res.status(OK).send(await reservaEstoqueService.getOneById(token.id,Number.parseInt(req.params.id)));
});

export default router;