import { Evento } from "@models/evento-model";
import eventoRepo from '@repos/evento-repo';

function addOne(evento: Evento): Promise<void>{
    return eventoRepo.add(evento);
}

export default {
    addOne
} as const;