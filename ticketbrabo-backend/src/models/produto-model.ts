import { Column, Entity } from "typeorm";
import { CategoriaProduto } from "./categoria-produto-model";

@Entity()
export class Produto{

    @Column()
    preco: number;

    @Column()
    quantidadeTotal: number;

    @Column()
    categoriaProduto: CategoriaProduto;
}