import { Localidade } from '@models/commons/localidade-model';
import localidadeRepo from '@repos/localidade-repo';

async function getIfExits(localidade: Localidade) {
    const local = await localidadeRepo.getIfExits(localidade);
    if(!local) {
        return localidade;
    }
    return local;
}

export default {
   getIfExits
} as const;