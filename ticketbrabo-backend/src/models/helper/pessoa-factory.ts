import { PessoaBase } from "@models/commons/pessoa-base";
import { Pessoa } from "@models/pessoa-model";
import { Produtor } from "@models/produtor-model";
import { Vendedor } from "@models/vendedor-model";
import { PessoaEnum } from "./pessoa-enum";


export class PessoaFactory {

    static criarPessoa(pessoaEnum: PessoaEnum): PessoaBase{
        if(pessoaEnum == PessoaEnum.VENDEDOR) {
           return new Vendedor();
        } else if(pessoaEnum == PessoaEnum.PRODUTOR) {
            return new Produtor();
        }
    
        throw new Error("Tipo de Pessoa não existente");
    }
    
}