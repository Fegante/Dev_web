import { DatabaseSingleton } from "@configs/db";
import { Localidade } from "@models/commons/localidade-model";

async function getIfExits(localidade: Localidade) {
    return DatabaseSingleton.Instance.getRepository(Localidade)
    .findOne({
        where: {
            bairro: localidade.bairro,
            cep: localidade.cep,
            logradouro: localidade.logradouro,
            municipio: localidade.municipio
        }
    });
}

export default {
   getIfExits
} as const;