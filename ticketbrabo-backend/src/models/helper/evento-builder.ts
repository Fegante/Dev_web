import { Evento } from "@models/evento-model";
import { ReservaEstoque } from "@models/reserva-estoque-model";

export class EventoBuilder{

    static builder(evento: Evento): Evento{
        const reservaEstoque = new ReservaEstoque();
        reservaEstoque.evento = evento;
        
        return evento;
    }
}