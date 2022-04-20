import { Pessoa } from "./commons/pessoa-model";

export class Vendedor extends Pessoa{
    private _dataInicioContrato: Date;
    private _dataFimContrato: Date;
    private _cargo: string;
    
    constructor(id: number, name: string, email: string, cpf: string, cnpj:  string, telefone: string, dataInicioContrato: Date, dataFimContrato: Date, cargo: string){
        super(id, name, email, cnpj, cpf, telefone);
        this._dataInicioContrato = dataInicioContrato;
        this._dataFimContrato = dataFimContrato;
        this._cargo = cargo;
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

