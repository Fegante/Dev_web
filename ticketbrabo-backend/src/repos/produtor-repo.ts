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

async function findByEmailOrId(email: string, id: string) {
    return await DatabaseSingleton.Instance.getRepository(Produtor)
        .findOne({
            where: [
                {
                    pessoa: { email: email },
                },
                {
                    pessoa: { oauthIdentification: id }
                }
            ]
        });
}

export default {
    save,
    getAll,
    findByEmail,
    findByEmailOrId
} as const;