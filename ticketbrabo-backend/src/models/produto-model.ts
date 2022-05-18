import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { CategoriaProduto } from "./categoria-produto-model";
import { BaseEntity_ } from "./commons/baseEntity-model";

@Entity()
export class Produto extends BaseEntity_{

    @Column({type: "decimal", })
    preco: number;

    @Column()
    quantidadeTotal: number;

    @OneToOne(() => CategoriaProduto)
    @JoinColumn()
    categoriaProduto: CategoriaProduto;
}