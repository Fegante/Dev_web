import { Produto } from "@models/produto-model";
import produtoRepo from "@repos/produto-repo";

function update(produto: Produto): Promise<void>{
    return produtoRepo.update(produto);
}

function getOne(id: number): Promise<Produto | null>{
    return produtoRepo.getOne(id);
}

function addOne(produto: Produto): Promise<Produto> {
    return produtoRepo.addOne(produto);
}



export default {
    update,
    getOne,
    addOne
} as const;