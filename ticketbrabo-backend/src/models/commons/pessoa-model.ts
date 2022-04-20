export abstract class Pessoa{
    id: number;
    name: string;
    email: string;
    cpf: string;
    cnpj: string;
    telefone: string;

    constructor(id: number, name: string, email: string, cpf: string, cnpj:  string, telefone: string){
        this.id = id;
        this.name = name;
        this.email =  email;
        this.cpf = cpf;
        this.cnpj = cnpj;
        this.telefone = telefone;
    }


}