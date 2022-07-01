import { ReservaEstoque } from "@models/reserva-estoque-model";
import eventoRepo from "@repos/evento-repo";
import reservaEstoqueRepo from "@repos/reservaEstoque-repo";


function getAll(): Promise<ReservaEstoque[]> {
    return reservaEstoqueRepo.getAll();
}

async function getByWhere(where: {}) {
    return reservaEstoqueRepo.getByWhere(where);
}

async function getOneById(token: number, id: number) {
    return reservaEstoqueRepo.getOneById(token,id);
}

// function getOneById(id: number): Promise<Evento | null> {
//     return eventoRepo.getOneById(id);
// }

export default {
    getAll,
    getByWhere,
    getOneById
} as const;