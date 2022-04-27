import { AppDataSource } from "@configs/db";
import { Evento } from "@models/evento-model";


async function add(evento: Evento): Promise<void>{
    const result = await AppDataSource.getRepository(Evento).save(evento);
    return;
}


export default {
    add,
} as const;