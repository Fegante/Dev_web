import { Evento } from "@models/evento-model";
import { EventoBuilder } from "@models/helper/evento-builder";
import eventoRepo from '@repos/evento-repo';

function addOne(evento: Evento): Promise<void>{
    return eventoRepo.add(EventoBuilder.builder(evento));
}

export default {
    addOne
} as const;