import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity_ } from "./baseEntity-model";

@Entity()
export class Local extends BaseEntity_{
    
    @Column()
    logradouro: string;

    @Column()
    bairro: string;

    @Column()
    municipio: string;

    @Column()
    cep: string;

}