import { Produtor } from "@models/produtor-model";
import produtorRepo from "@repos/produtor-repo";

function addOne(produtor: Produtor){
    return produtorRepo.save(produtor);
}

function findByEmail(email: string) {
    return produtorRepo.findByEmail(email);
}

function findByEmailOrId(email: string, id: string) {
    return produtorRepo.findByEmailOrId(email, id);
}

export default {
    addOne,
    findByEmail,
    findByEmailOrId,
} as const;