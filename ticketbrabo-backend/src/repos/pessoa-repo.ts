import { DatabaseSingleton } from "@configs/db";
import { Pessoa } from "@models/pessoa-model";

async function add(pessoa: Pessoa): Promise<void> {
    await DatabaseSingleton.Instance
        .getRepository(Pessoa)
        .save(pessoa);
}

export default {
    add
} as const;
