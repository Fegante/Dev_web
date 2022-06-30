import { Evento } from "@models/evento-model";
import eventoRepo from '@repos/evento-repo';

function addOne(evento: Evento): Promise<void>{
    return eventoRepo.add(evento);
}

function getAll(): Promise<Evento[]>{
    return eventoRepo.get();
}

function getByProdutorId(id: number): Promise<Evento[]> {
    return eventoRepo.getByProdutorId(id);
}

function getOneById(id: number): Promise<Evento | null> {
    return eventoRepo.getOneById(id);
}

export default {
    addOne,
    getAll,
    getByProdutorId,
    getOneById
} as const;