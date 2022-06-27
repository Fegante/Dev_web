import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity_ } from "./commons/baseEntity-model";
import { PessoaBase } from "./commons/pessoa-base";
import { Evento } from "./evento-model";
import { Pessoa } from "./pessoa-model";

@Entity()
export class Produtor extends PessoaBase{
    
    @OneToOne(() => Pessoa, {cascade: true})
    @JoinColumn()
    pessoa: Pessoa;

    @OneToMany(() => Evento, (evento) => evento.id)
    @JoinColumn()
    eventos: Evento[];

}