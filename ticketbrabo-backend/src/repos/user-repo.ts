import { AppDataSource } from '@configs/db';
import { Pessoa } from '@models/commons/pessoa-model';
import { getRandomInt } from '@shared/functions';
import orm from './mock-orm';

async function getOne(email: string): Promise<Pessoa | null> {
    const db = await orm.openDb();

    for (const user of db.users) {
        if (user.email === email) {
            return user;
        }
    }
    return null;
}


/**
 * See if a user with the given id exists.
 * 
 * @param id 
 */
async function persists(id: number): Promise<boolean> {
    const db = await orm.openDb();
    for (const user of db.users) {
        if (user.id === id) {
            return true;
        }
    }
    return false;
}


/**
 * Get all users.
 * 
 * @returns 
 */
async function getAll(): Promise<Pessoa[]> {
    const db = await orm.openDb();
   
    const users = await AppDataSource.getRepository(Pessoa);


    console.log(await users.find());


    return db.users;
}


/**
 * Add one user.
 * 
 * @param user 
 * @returns 
 */
async function add(user: Pessoa): Promise<void> {
    const db = await orm.openDb();
    user.id = getRandomInt();
    db.users.push(user);
    return orm.saveDb(db);
}


/**
 * Update a user.
 * 
 * @param user 
 * @returns 
 */
async function update(user: Pessoa): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].id === user.id) {
            db.users[i] = user;
            return orm.saveDb(db);
        }
    }
}


/**
 * Delete one user.
 * 
 * @param id 
 * @returns 
 */
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
