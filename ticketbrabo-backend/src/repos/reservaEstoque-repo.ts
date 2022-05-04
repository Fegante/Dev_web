import { AppDataSource } from "@configs/db";
import { ReservaEstoque } from "@models/reserva-estoque-model";


async function save(reservaEstoque: ReservaEstoque): Promise<ReservaEstoque>{
    return await AppDataSource.getRepository(ReservaEstoque).save(reservaEstoque);
}

async function getAll(){
    return await AppDataSource.getRepository(ReservaEstoque).find();
}