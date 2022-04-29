import { Column, Entity } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";

@Entity()
export class CategoriaProduto extends BaseEntity_{

    @Column()
    nome: string;

    @Column()
    descricao: string;
}