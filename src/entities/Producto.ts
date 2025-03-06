import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Categoria } from "./Categoria";
import { Marca } from "./Marca";
import { Proveedores } from "./Proveedores";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @ManyToOne(() => Marca, { nullable: true })
    @JoinColumn({ name: "id_marca" })
    marca: Marca;

    @ManyToOne(() => Categoria, { nullable: true })
    @JoinColumn({ name: "id_categoria" })
    categoria: Categoria;

    @Column({ type: "int",name:"cantidad_total" })
    cantidad_total: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    precio: number;

    

    @ManyToOne(() => Proveedores, { nullable: true })
    @JoinColumn({ name: "id_proveedor" })
    proveedor: Proveedores;

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
