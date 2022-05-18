import { Produto } from "@models/produto-model";
import produtoRepo from "@repos/produto-repo";

function update(produto: Produto): Promise<void>{
    return produtoRepo.update(produto);
}

function getOne(id: number): Promise<Produto | null>{
    return produtoRepo.getOne(id);
}

function save(produto: Produto): Promise<Produto> {
    return produtoRepo.save(produto);
}


export default {
    update,
    getOne,
    save
} as const;