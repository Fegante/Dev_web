export class Evento {
  
    constructor(
        protected _dataHoraInicio: Date,
        protected _dataHoraFim: Date,
        protected _nome: string,
        protected _totalInvestido: number,
        protected _totalReceita: number,
        protected _local: string) {

    }

    public get dataHoraInicio(): Date {
        return this._dataHoraInicio;
    }
    public set dataHoraInicio(value: Date) {
        this._dataHoraInicio = value;
    }

    public get dataHoraFim(): Date {
        return this._dataHoraFim;
    }
    
    public set dataHoraFim(value: Date) {
        this._dataHoraFim = value;
    }
    
    public get nome(): string {
        return this._nome;
    }
    
    public set nome(value: string) {
        this._nome = value;
    }

    public get totalInvestido(): number {
        return this._totalInvestido;
    }

    public set totalInvestido(value: number) {
        this._totalInvestido = value;
    }

    public get totalReceita(): number {
        return this._totalReceita;
    }
    public set totalReceita(value: number) {
        this._totalReceita = value;
    }

    public get local(): string {
        return this._local;
    }
    public set local(value: string) {
        this._local = value;
    }

}