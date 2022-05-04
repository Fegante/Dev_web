import { Evento } from "@models/evento-model";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity_ } from "./baseEntity-model";

@Entity()
export abstract class Pessoa extends BaseEntity_{
 
    @Column({nullable: true, name:"nome", type: "varchar"})
    nome: string;

    @Column({nullable: true})
    email: string;
    
    @Column({nullable: true})
    cpf: string;
    
    @Column({nullable: true})
    cnpj: string;

    @Column({nullable: true})
    telefone: string;
}