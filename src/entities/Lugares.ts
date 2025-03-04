import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Lugares {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 50 })
    nombre: string;
}
