import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";
import { Ficha } from "./ficha-model";
import { Produto } from "./produto-model";


@Entity()
export class ItemFicha extends BaseEntity_{

    @Column()
    preco: number;

    @Column()
    quantidade: number;

    @OneToOne(() => Produto)
    @JoinColumn()
    produto: Produto;

    @ManyToOne(() => Ficha, (ficha) => ficha.itemsFicha)
    ficha: Ficha;
}