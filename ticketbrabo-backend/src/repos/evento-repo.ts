import { DatabaseSingleton } from "@configs/db";
import { Evento } from "@models/evento-model";


async function add(evento: Evento): Promise<void>{
    const result = await DatabaseSingleton.Instance
    .getRepository(Evento).save(evento);

    console.log(result);
    return;
}


async function get(): Promise<Evento[]>{
   return await DatabaseSingleton.Instance
    .getRepository(Evento).find();
}


export default {
    add,
    get
} as const;