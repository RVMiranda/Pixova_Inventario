import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { EstatusCotizaciones } from"./EstatusCotizaciones";
import { Lugares } from "./Lugares";

@Entity()
export class Cotizaciones {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Cliente, { nullable: true })
    @JoinColumn({ name: "id_cliente" })
    cliente: Cliente;

    @Column({ type: "date" })
    fecha: Date;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    monto_total: number;

    @ManyToOne(() => EstatusCotizaciones, { nullable: true })
    @JoinColumn({ name: "id_estatus" })
    estatus: EstatusCotizaciones;

    @ManyToOne(() => Lugares, { nullable: true })
    @JoinColumn({ name: "id_lugar" })
    lugar: Lugares;

    @Column({ unique: true, length: 50 })
    folio: string;

    @Column({ length: 255, nullable: true })
    subtotal_letra: string;
}
