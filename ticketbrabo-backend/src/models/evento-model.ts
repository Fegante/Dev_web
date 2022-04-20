export class Evento {
    private _dataHoraInicio: Date;
    private _dataHoraFim: Date;
    private _nome: string;
    private _totalInvestido: number;
    private _totalReceita: number;
    private _local: string;

    constructor(dataHoraInicio: Date,
        dataHoraFim: Date,
        nome: string,
        totalInvestido: number,
        totalReceita: number,
        local: string) {

        this._dataHoraInicio = dataHoraInicio;
        this._dataHoraFim = dataHoraFim;
        this._nome = nome;
        this._totalInvestido = totalInvestido;
        this._totalReceita = totalReceita;
        this._local = local;

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