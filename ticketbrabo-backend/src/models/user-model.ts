import { Pessoa } from "./commons/pessoa-model";

export class Vendedor extends Pessoa{
    
    constructor(
        id: number, 
        name: string, 
        email: string, 
        cpf: string, 
        cnpj:  string, 
        telefone: string, 
        protected _dataInicioContrato: Date, 
        protected _dataFimContrato: Date, 
        protected _cargo: string){

        super(id, name, email, cnpj, cpf, telefone);
    }

    public get dataInicioContrato(): Date {
        return this._dataInicioContrato;
    }

    public set dataInicioContrato(value: Date) {
        this._dataInicioContrato = value;
    }

    public get dataFimContrato(): Date {
        return this._dataFimContrato;
    }

    public set dataFimContrato(value: Date) {
        this._dataFimContrato = value;
    }

    public get cargo(): string {
        return this._cargo;
    }
    public set cargo(value: string) {
        this._cargo = value;
    }
    
}

