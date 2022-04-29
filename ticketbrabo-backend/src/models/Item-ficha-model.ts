import { Column, Entity, JoinColumn } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";
import { Produto } from "./produto-model";


@Entity()
export class ItemFicha extends BaseEntity_{

    @Column()
    preco: number;

    @Column()
    quantidade: number;

    @JoinColumn()
    produto: Produto;
}