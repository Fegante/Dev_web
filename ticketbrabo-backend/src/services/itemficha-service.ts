import { ItemFicha } from "@models/Item-ficha-model";
import itemfichaRepo from "@repos/itemficha-repo";


function getOne(id: number): Promise<ItemFicha | null>{
    return itemfichaRepo.getOne(id);
}

export default {
    getOne
} as const;