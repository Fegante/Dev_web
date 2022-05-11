import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";
import { ItemFicha } from "./Item-ficha-model";
import { PontoVenda } from "./ponto-venda.model";

@Entity()
export class Ficha extends BaseEntity_{

    @Column()
    totalPrecoItems: number;

    @Column()
    dataHora: string;

    @ManyToOne(() => PontoVenda, (pontoVenda) => pontoVenda.fichas)
    pontoVenda: PontoVenda;

    @OneToMany(() => ItemFicha, (itemFicha) => itemFicha.ficha)
    itemsFicha: ItemFicha[];

}