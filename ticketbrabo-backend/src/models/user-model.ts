import { Column, Entity } from "typeorm";
import { Pessoa } from "./commons/pessoa-model";

@Entity()
export class Vendedor extends Pessoa{
    
    @Column({type: 'datetime'})
    dataInicioContrato: Date;
    
    @Column({type: 'datetime'})
    dataFimContrato: Date;
    
    @Column()
    cargo: string;
    
}

