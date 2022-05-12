import { Ficha } from "@models/ficha-model";
import fichaRepo from "@repos/ficha-repo";

function getOne(id: number): Promise<Ficha | null> {
    return fichaRepo.getOne(id);
}

export default {
    getOne
} as const;