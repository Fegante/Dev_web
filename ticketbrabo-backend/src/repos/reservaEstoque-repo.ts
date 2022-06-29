import { DatabaseSingleton } from "@configs/db";
import { ReservaEstoque } from "@models/reserva-estoque-model";


async function save(reservaEstoque: ReservaEstoque): Promise<ReservaEstoque>{
    return await DatabaseSingleton.Instance.getRepository(ReservaEstoque).save(reservaEstoque);
}

async function getAll(){
    return await DatabaseSingleton.Instance
    .getRepository(ReservaEstoque)
    .find({
        relations: {
            evento: true,
            produto: {
                categoriaProduto: true
            }
        }
    });
}

async function getByWhere(where: {}) {
    return await DatabaseSingleton.Instance
    .getRepository(ReservaEstoque)
    .find({
        where: {
            ...where
        },
        relations: {
            produto: {
                categoriaProduto: true
            }
        }
    });
}

export default {
    save,
    getAll,
    getByWhere
} as const;