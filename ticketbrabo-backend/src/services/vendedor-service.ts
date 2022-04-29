import { Vendedor } from '@models/vendedor-model';
import vendedorRepo from '@repos/vendedor-repo';
import { UserNotFoundError } from '@shared/errors';

function getAll(): Promise<Vendedor[]> {
    return vendedorRepo.getAll();
}

function addOne(user: Vendedor): Promise<void> {
    return vendedorRepo.add(user);
}

async function updateOne(user: Vendedor): Promise<void> {
    const persists = await vendedorRepo.persists(user.id);
    if (!persists) {
        throw new UserNotFoundError();
    }
    return vendedorRepo.update(user);
}

async function deleteOne(id: number): Promise<void> {
    const persists = await vendedorRepo.persists(id);
    if (!persists) {
        throw new UserNotFoundError();
    }
    return vendedorRepo.delete(id);
}


// Export default
export default {
    getAll,
    addOne,
    updateOne,
    delete: deleteOne,
} as const;
