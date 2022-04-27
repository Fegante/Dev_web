import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pessoa {
 
    @PrimaryGeneratedColumn('rowid')
    id: number;
    
    @Column({nullable: true, name:"nome", type: "varchar"})
    nome: string;

    // @Column({nullable: true})
    // email: string;
    
    @Column({nullable: true})
    cpf: string;
    
    @Column({nullable: true})
    cnpj: string;

    @Column({nullable: true})
    telefone: string;

}