import { Column, Entity } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";

@Entity()
export class Ficha extends BaseEntity_{

    @Column()
    totalPrecoItems: number;

    @Column()
    dataHora: string;

}