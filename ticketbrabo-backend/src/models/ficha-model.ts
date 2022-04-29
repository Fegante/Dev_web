import { Column, Entity } from "typeorm";

@Entity()
export class Ficha {

    @Column()
    totalPrecoItems: number;

    @Column()
    dataHora: string;

}