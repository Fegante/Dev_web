import { Produtor } from "@models/produtor-model";
import produtorRepo from "@repos/produtor-repo";

function addOne(produtor: Produtor){
    return produtorRepo.save(produtor);
}

function findByEmail(email: string) {
    return produtorRepo.findByEmail(email);
}

function findByEmailOrOauthId(email: string, id: string) {
    return produtorRepo.findByEmailOrOauthId(email, id);
}

function findById(id: number) {
    return produtorRepo.findById(id);
}

export default {
    addOne,
    findByEmail,
    findByEmailOrOauthId,
    findById
} as const;