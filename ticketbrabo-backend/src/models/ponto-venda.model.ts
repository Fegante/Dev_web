import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Local } from "@models/commons/local-model";
import { BaseEntity_ } from "./commons/baseEntity-model";
import { Ficha } from "./ficha-model";

@Entity()
export class PontoVenda extends BaseEntity_{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantidadeAjudantes: number;

    @ManyToOne(() => Local, (local) => local.id)
    @JoinColumn({name: 'local', referencedColumnName:'id'})
    local: Local;

    @OneToMany(() => Ficha, (ficha) => ficha.pontoVenda)
    fichas: Ficha[];
}