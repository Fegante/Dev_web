import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";
import { Produtor } from "./produtor-model";
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
    
    @Column({name: "localidade"})
    local: string;


    @OneToMany(() => ReservaEstoque, (reservaEstoque) => reservaEstoque.evento)
    reservasEstoque: ReservaEstoque[];

    @ManyToOne(() => Produtor, (produtor) => produtor.eventos)
    produtor: Produtor;
}