import { ReservaEstoque } from "@models/reserva-estoque-model";
import eventoRepo from "@repos/evento-repo";
import reservaEstoqueRepo from "@repos/reservaEstoque-repo";


function getAll(): Promise<ReservaEstoque[]> {
    return reservaEstoqueRepo.getAll();
}

export default {
    getAll,
} as const;