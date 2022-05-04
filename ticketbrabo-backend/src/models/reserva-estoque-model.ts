import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";
import { Evento } from "./evento-model";
import { Produto } from "./produto-model";

@Entity()
export class ReservaEstoque extends BaseEntity_{
    
    @Column()
    quantidade: number;

    @JoinColumn()
    produto: Produto;

    @ManyToOne(() => Evento, (evento) => evento.reservasEstoque)
    evento: Evento;
}