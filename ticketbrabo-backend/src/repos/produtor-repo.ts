import { DatabaseSingleton } from "@configs/db";
import { Produtor } from "@models/produtor-model";


async function save(produtor: Produtor): Promise<Produtor>{
    return await DatabaseSingleton.Instance.getRepository(Produtor).save(produtor);
}

async function getAll(){
    return await DatabaseSingleton.Instance.getRepository(Produtor).find();
}


export default {
    save,
    getAll
} as const;