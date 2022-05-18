import { DatabaseSingleton } from "@configs/db";
import { Ficha } from "@models/ficha-model";

async function getOne(id: number): Promise<Ficha | null>{
    return await DatabaseSingleton.Instance.getRepository(Ficha)
    .findOne({where: { id: id}});   
}

export default {
    getOne
} as const;