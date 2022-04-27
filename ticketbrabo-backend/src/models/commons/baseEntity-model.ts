import { PrimaryGeneratedColumn } from "typeorm";


export abstract class BaseEntity_ {

    @PrimaryGeneratedColumn()
    id: number;
}