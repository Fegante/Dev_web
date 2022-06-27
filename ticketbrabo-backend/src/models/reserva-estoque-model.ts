import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";
import { Evento } from "./evento-model";
import { Produto } from "./produto-model";

@Entity()
export class ReservaEstoque extends BaseEntity_{
    
    @Column()
    quantidade: number;

    @OneToOne(() => Produto)
    @JoinColumn()
    produto: Produto;

    @ManyToOne(() => Evento, (evento) => evento.reservasEstoque)
    evento: Evento;
}