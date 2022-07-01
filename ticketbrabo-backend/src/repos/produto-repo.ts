import { DatabaseSingleton } from "@configs/db";
import { Produto } from "@models/produto-model";

async function update(produto: Produto): Promise<void>{
    await DatabaseSingleton.Instance.getRepository(Produto).save(produto);
}

async function getOne(id: number): Promise<Produto | null>{
    return await DatabaseSingleton.Instance.getRepository(Produto).findOneBy({id: id});
}

async function getAll(id: number): Promise<Produto[]>{
    return await DatabaseSingleton.Instance.getRepository(Produto).find({where:{produtor: {id: id}}, relations: {categoriaProduto: true}});
}

async function addOne(produto: Produto): Promise<Produto>{
    return await  DatabaseSingleton.Instance
    .getRepository(Produto)
    .save(produto);
}

async function getStatistic(produtorId: number) {
    return DatabaseSingleton.Instance
    .getRepository(Produto)
    .find({
        
    });
}

export default {
    update,
    getOne,
    addOne,
    getAll,
} as const;