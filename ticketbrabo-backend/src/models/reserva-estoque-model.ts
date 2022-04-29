import { Column, Entity, JoinColumn } from "typeorm";
import { Produto } from "./produto-model";

@Entity()
export class ReservaEstoque{
    
    @Column()
    quantidade: number;

    @JoinColumn()
    produto: Produto;
    
}