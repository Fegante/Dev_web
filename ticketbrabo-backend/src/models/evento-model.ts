import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";
import { Localidade } from "./commons/localidade-model";
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

    @Column({nullable: true})
    totalReceita: number;
    
    @OneToOne(() => Localidade, {cascade: true})
    @JoinColumn()
    localidade: Localidade;


    @OneToMany(() => ReservaEstoque, (reservaEstoque) => reservaEstoque.evento)
    reservasEstoque: ReservaEstoque[];

    @ManyToOne(() => Produtor, (produtor) => produtor.eventos)
    produtor: Produtor;
}