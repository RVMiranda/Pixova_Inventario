import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Proveedores {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column({ length: 100, nullable: true })
    contacto: string;

    @Column({ length: 255, nullable: true })
    producto_suministrado: string;

    @Column({ length: 100 })
    usuario_creacion: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion?: Date;

    @Column({ length: 100, nullable: true })
    usuario_actualizacion?: string;

    @Column({ type: "timestamp", nullable: true })
    fecha_actualizacion?: Date;

    @Column({ type: "tinyint", default: 1 })
    estado: number;
}
