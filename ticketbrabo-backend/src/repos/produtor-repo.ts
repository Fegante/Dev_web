import { DatabaseSingleton } from "@configs/db";
import { Produtor } from "@models/produtor-model";


async function save(produtor: Produtor): Promise<Produtor>{
    return await DatabaseSingleton.Instance.getRepository(Produtor).save(produtor);
}

async function getAll(){
    return await DatabaseSingleton.Instance.getRepository(Produtor).find();
}

async function findByEmail(email: string) { 
    return await DatabaseSingleton.Instance.getRepository(Produtor).findOne({where: {pessoa: {email: email}}, relations: ["pessoa"]});
}

async function findByEmailOrOauthId(email: string, id: string) {
    return await DatabaseSingleton.Instance.getRepository(Produtor)
        .findOne({
            where: [
                {
                    pessoa: { email: email },
                },
                {
                    pessoa: { oauthIdentification: id }
                }
            ],
            relations: {
                pessoa: true
            }
        });
}

async function findById(id: number) {
    return await DatabaseSingleton.Instance.getRepository(Produtor)
    .findBy({id: id});
}

async function findOneById(id: number) {
    return await DatabaseSingleton.Instance.getRepository(Produtor)
    .findOneBy({id: id});
}

export default {
    save,
    getAll,
    findByEmail,
    findByEmailOrOauthId,
    findById,
    findOneById
} as const;