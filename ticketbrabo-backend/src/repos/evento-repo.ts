import { DatabaseSingleton } from "@configs/db";
import { Evento } from "@models/evento-model";


async function add(evento: Evento): Promise<void>{
    const result = await DatabaseSingleton.Instance
    .getRepository(Evento).save(evento);

    console.log(result);
    return;
}


async function get(): Promise<Evento[]>{
   return DatabaseSingleton.Instance
    .getRepository(Evento).find();
}

async function getByProdutorId(id: number): Promise<Evento[]> {
    return DatabaseSingleton.Instance
        .getRepository(Evento).find({
            where: {
                produtor: { id: id }
            }
        });
}

async function getOneById(id: number): Promise<Evento | null> {
    return DatabaseSingleton.Instance.getRepository(Evento).findOne({where: {id: id}, relations: {localidade: true}});
}

export default {
    add,
    get,
    getByProdutorId,
    getOneById,
} as const;