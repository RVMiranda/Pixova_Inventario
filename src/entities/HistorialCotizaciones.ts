import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Cotizaciones } from "./Cotizaciones";

@Entity()
export class HistorialCotizaciones {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cotizaciones, { nullable: false })
    @JoinColumn({ name: "id_cotizacion" })
    cotizacion: Cotizaciones;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    fecha_modificacion?: Date;

    @Column({ length: 255, nullable: true })
    accion: string;

    @Column({ length: 100, nullable: true })
    usuario: string;
}
