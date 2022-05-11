import { AppDataSource } from "@configs/db";
import { Produto } from "@models/produto-model";

async function update(produto: Produto): Promise<void>{
    AppDataSource.getRepository(Produto).save(produto);
}

export default {
    update
} as const;