import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Cliente } from "./Cliente";

@Entity()
export class Reservas {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cliente, { nullable: false })
    @JoinColumn({ name: "id_cliente" })
    cliente: Cliente;

    @Column({ type: "date" })
    fecha_inicio: Date;

    @Column({ type: "date" })
    fecha_fin: Date;

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
