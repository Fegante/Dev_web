import { Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./commons/pessoa-model";
import { Evento } from "./evento-model";
import { Ficha } from "./ficha-model";

@Entity()
export class Produtor extends Pessoa{
    
    @OneToMany(() => Evento, (evento) => evento.id)
    eventos: Evento[];

}