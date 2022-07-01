import { DatabaseSingleton } from "@configs/db";
import { Produto } from "@models/produto-model";
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

async function getOneById(token: number, id: number) {
    return await DatabaseSingleton.Instance
    .getRepository(Produto)
    .findOne({
        where: {
            produtor: { id: token },
            id: id
        },
        relations: {categoriaProduto: true}
    });
}

export default {
    save,
    getAll,
    getByWhere,
    getOneById
} as const;