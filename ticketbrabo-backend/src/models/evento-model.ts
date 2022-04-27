import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Evento {
  
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dataHoraInicio: Date;
    
    @Column()
    dataHoraFim: Date;
    
    @Column()
    nome: string;
    
    @Column()
    totalInvestido: number;

    @Column()
    totalReceita: number;
    
    @Column()
    local: string;

}