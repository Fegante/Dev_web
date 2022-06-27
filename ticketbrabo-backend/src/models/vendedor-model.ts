import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { PessoaBase } from "./commons/pessoa-base";
import { Pessoa } from "./pessoa-model";

@Entity()
export class Vendedor extends PessoaBase{
    
    @Column({type: 'timestamptz'})
    dataInicioContrato: Date;
    
    @Column({type: 'timestamptz'})
    dataFimContrato: Date;
    
    @Column()
    cargo: string;

    @JoinColumn()
    pessoa: Pessoa;
    
}

