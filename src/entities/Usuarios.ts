import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Acceso } from "./Acceso";
import { Roles } from "./Roles";

@Entity()
export class Usuarios {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ unique: true, length: 100 })
    email: string;

    @ManyToOne(() => Acceso, { nullable: true })
    @JoinColumn({ name: "id_acceso" })
    acceso: Acceso;

    @ManyToOne(() => Roles, { nullable: true })
    @JoinColumn({ name: "id_rol" })
    rol: Roles;

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
