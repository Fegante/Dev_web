import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Local } from "@models/commons/local-model";

@Entity()
export class PontoVenda {

    @PrimaryGeneratedColumn()
    id: number;


    @ManyToOne(() => Local, (local) => local.id)
    @JoinColumn({name: 'local', referencedColumnName:'id'})
    local: Local;

    @Column()
    quantidadeAjudantes: number;
}