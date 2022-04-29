import { Pessoa } from "@models/commons/pessoa-model";
import { Produtor } from "@models/produtor-model";
import { Vendedor } from "@models/vendedor-model";


export class PessoaFactory {

    criarPessoa(typeClass: string): Pessoa | null{
        if(typeClass == "vendedor"){
            return new Vendedor();
        }else if(typeClass == "produtor"){
            return new Produtor();
        }

        return null;
    }
}