import { Produto } from "@models/produto-model";
import produtoRepo from "@repos/produto-repo";

function update(produto: Produto): Promise<void>{
    return produtoRepo.update(produto);
}


export default {
    update
} as const;