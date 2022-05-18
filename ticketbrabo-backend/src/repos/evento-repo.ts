import { DatabaseSingleton } from "@configs/db";
import { Evento } from "@models/evento-model";


async function add(evento: Evento): Promise<void>{
    const result = await DatabaseSingleton.Instance
    .getRepository(Evento).save(evento);
    return;
}


export default {
    add,
} as const;