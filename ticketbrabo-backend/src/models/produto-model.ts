import { Column, Entity, JoinColumn, OneToMany, OneToOne, ManyToOne } from "typeorm";
import { CategoriaProduto } from "./categoria-produto-model";
import { BaseEntity_ } from "./commons/baseEntity-model";
import { Produtor } from "./produtor-model";
import { ReservaEstoque } from "./reserva-estoque-model";

@Entity()
export class Produto extends BaseEntity_{

    @Column({type: "decimal", })
    preco: number;

    @Column()
    quantidadeTotal: number;

    @OneToOne(() => CategoriaProduto, {
        cascade: true
    })
    @JoinColumn()
    categoriaProduto: CategoriaProduto;

    @OneToMany(() => ReservaEstoque, (reservasEstoque) => reservasEstoque.produto)
    reservasEstoque: ReservaEstoque[];

    @ManyToOne(() => Produtor, (produtor) => produtor.eventos)
    produtor: Produtor;
}