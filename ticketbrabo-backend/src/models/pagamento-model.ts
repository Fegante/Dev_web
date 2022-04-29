import { Column, Entity } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";

@Entity()
export class Pagamento extends BaseEntity_{
    
    @Column()
    dataHora: Date;

    @Column()
    valor: number;

    @Column()
    forma: string;
}