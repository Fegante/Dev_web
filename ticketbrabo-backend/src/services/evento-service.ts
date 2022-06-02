import { Evento } from "@models/evento-model";
import eventoRepo from '@repos/evento-repo';

function addOne(evento: Evento): Promise<void>{
    return eventoRepo.add(evento);
}

function getAll(): Promise<Evento[]>{
    return eventoRepo.get();
}

export default {
    addOne,
    getAll
} as const;