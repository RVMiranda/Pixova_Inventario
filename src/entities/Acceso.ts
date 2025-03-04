import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, BeforeInsert } from "typeorm";
import * as bcrypt from "bcrypt"; // Importa bcrypt

@Entity()
export class Acceso {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 50 })
    usuario: string;

    @Column({ length: 60 })
    contraseña: string;

    // Antes de guardar, hashear la contraseña
    @BeforeInsert()
    async hashPassword(): Promise<void> {
        this.contraseña = await bcrypt.hash(this.contraseña, 10);
    }

    @Column({ length: 100 })
    usuario_creacion: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    fecha_creacion: Date;

    @Column({ length: 100, nullable: true })
    usuario_actualizacion?: string;

    @Column({ type: "timestamp", nullable: true })
    fecha_actualizacion?: Date;

    @Column({ type: "tinyint", default: 1 })
    estado: number;
}
