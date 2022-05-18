import { CategoriaProduto } from "@models/categoria-produto-model";
import categoriaProdutoRepo from "@repos/categoriaProduto-repo";

async function save(categoriaProduto: CategoriaProduto) {
    await categoriaProdutoRepo.save(categoriaProduto);
}