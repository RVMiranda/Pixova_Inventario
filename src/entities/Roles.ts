import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 50 })
    nombre: string;

    @Column({ length: 100 })
    usuario_creacion: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: Date;

    @Column({ length: 100, nullable: true })
    usuario_actualizacion: string;

    @Column({ type: "timestamp", nullable: true })
    fecha_actualizacion: Date;

    @Column({ type: "tinyint", default: 1 })
    estado: number;
}
