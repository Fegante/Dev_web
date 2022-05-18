import { Column, Entity } from "typeorm";
import { BaseEntity_ } from "./baseEntity-model";

@Entity()
export class Localidade extends BaseEntity_{
    
    @Column()
    logradouro: string;

    @Column()
    bairro: string;

    @Column()
    municipio: string;

    @Column()
    cep: string;

}