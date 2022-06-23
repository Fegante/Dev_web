import { Produtor } from "@models/produtor-model";
import produtorRepo from "@repos/produtor-repo";

function addOne(produtor: Produtor){
    return produtorRepo.save(produtor);
}

function findByEmail(email: string) {
    return produtorRepo.findByEmail(email);
}

export default {
    addOne,
    findByEmail
} as const;