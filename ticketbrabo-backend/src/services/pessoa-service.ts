import { Pessoa } from "@models/pessoa-model";
import pessoaRepo from "@repos/pessoa-repo";
import { contactcenterinsights_v1 } from "googleapis";


async function add(pessoa: Pessoa): Promise<void> {
    return pessoaRepo.add(pessoa);
}


export default {
    add
} as const;