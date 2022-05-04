import { Produtor } from "@models/produtor-model";
import produtorRepo from "@repos/produtor-repo";

function addOne(produtor: Produtor){
    return produtorRepo.save(produtor);
}

export default {
    addOne
} as const;