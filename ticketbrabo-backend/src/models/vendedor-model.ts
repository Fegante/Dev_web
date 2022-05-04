import { Column, Entity } from "typeorm";
import { Pessoa } from "./commons/pessoa-model";

@Entity()
export class Vendedor extends Pessoa{
    
    @Column({type: 'timestamptz'})
    dataInicioContrato: Date;
    
    @Column({type: 'timestamptz'})
    dataFimContrato: Date;
    
    @Column()
    cargo: string;
    
}

