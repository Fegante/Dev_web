import { AppDataSource } from '@configs/db';
import { Vendedor } from '@models/vendedor-model';
import { getRandomInt } from '@shared/functions';
import orm from './mock-orm';

async function getOne(email: string): Promise<Vendedor | null> {
    const db = await orm.openDb();

    for (const user of db.users) {
        if (user.email === email) {
            return user;
        }
    }
    return null;
}


async function persists(id: number): Promise<boolean> {
    const db = await orm.openDb();
    for (const user of db.users) {
        if (user.id === id) {
            return true;
        }
    }
    return false;
}


async function getAll(): Promise<Vendedor[]> {
    const db = await orm.openDb();
   
    const users = await AppDataSource.getRepository(Vendedor);


    console.log(await users.find());


    return db.users;
}


async function add(user: Vendedor): Promise<void> {
    const db = await orm.openDb();
    user.id = getRandomInt();
    db.users.push(user);
    return orm.saveDb(db);
}

async function update(user: Vendedor): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].id === user.id) {
            db.users[i] = user;
            return orm.saveDb(db);
        }
    }
}

async function deleteOne(id: number): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].id === id) {
            db.users.splice(i, 1);
            return orm.saveDb(db);
        }
    }
}


// Export default
export default {
    getOne,
    persists,
    getAll,
    add,
    update,
    delete: deleteOne,
} as const;
