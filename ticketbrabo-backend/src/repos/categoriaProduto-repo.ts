import { DatabaseSingleton } from "@configs/db";
import { CategoriaProduto } from "@models/categoria-produto-model";

async function save(categoriaProduto: CategoriaProduto): Promise<CategoriaProduto>{
    return await DatabaseSingleton.Instance.getRepository(CategoriaProduto).save(categoriaProduto);
}

export default {
    save
} as const;