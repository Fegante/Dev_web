import { DatabaseSingleton } from "@configs/db";
import { ItemFicha } from "@models/Item-ficha-model";


async function getOne(id: number): Promise<ItemFicha | null>{
    return await DatabaseSingleton.Instance.getRepository(ItemFicha)
    .findOne({
        where: {
            id: id,
        },
        relations: {
            ficha: false,
            produto:  true,
        },
    })
}

export default {
    getOne
} as const;