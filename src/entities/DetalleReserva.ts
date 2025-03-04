import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Reservas } from "./Reservas";
import { Producto } from "./Producto";

@Entity()
export class DetalleReserva {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Reservas, { nullable: false })
    @JoinColumn({ name: "id_reserva" })
    reserva: Reservas;

    @ManyToOne(() => Producto, { nullable: false })
    @JoinColumn({ name: "id_producto" })
    producto: Producto;

    @Column({ type: "int" })
    cantidad: number;

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
