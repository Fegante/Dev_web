import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";
import { ReservaEstoque } from "./reserva-estoque-model";

@Entity()
export class Evento extends BaseEntity_{

    @Column()
    dataHoraInicio: Date;
    
    @Column()
    dataHoraFim: Date;
    
    @Column()
    nome: string;
    
    @Column()
    totalInvestido: number;

    @Column()
    totalReceita: number;
    
    @Column()
    local: string;


    @OneToOne(() => ReservaEstoque)
    @JoinColumn()
    reservaEstoque: ReservaEstoque;

}