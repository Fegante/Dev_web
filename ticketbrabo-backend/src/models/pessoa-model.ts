import { Column, Entity } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";

@Entity()
export class Pessoa extends BaseEntity_{
 
    @Column({name:"nome", type: "varchar"})
    nome: string;

    @Column({nullable: true})
    email: string;
    
    @Column({nullable: true})
    cpf: string;
    
    @Column({nullable: true})
    cnpj: string;

    @Column({nullable: true})
    telefone: string;

    @Column({nullable: true})
    oauthIdentification: string;

    @Column({default: false})
    isRegistrationCompleted: boolean;

}