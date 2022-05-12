import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";
import { Localidade } from "./commons/localidade-model";
import { Ficha } from "./ficha-model";

@Entity()
export class PontoVenda extends BaseEntity_{

    @Column()
    quantidadeAjudantes: number;

    @ManyToOne(() => Localidade, (localidade) => localidade.id)
    localidade: Localidade;

    @OneToMany(() => Ficha, (ficha) => ficha.pontoVenda)
    fichas: Ficha[];
}