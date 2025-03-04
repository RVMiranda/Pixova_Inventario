import "reflect-metadata";
import { DataSource } from "typeorm";
import { Acceso } from "../entities/Acceso";
import { Usuarios } from "../entities/Usuarios";
import { Roles } from "../entities/Roles";
import { Categoria } from "../entities/Categoria";
import { Marca } from "../entities/Marca";
import { Proveedores } from "../entities/Proveedores";
import { Producto } from "../entities/Producto";
import { Cliente } from "../entities/Cliente";
import { Reservas } from "../entities/Reservas";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "password",
    database: process.env.DB_NAME || "inventario",
    entities: [
        Acceso, Usuarios, Roles, Categoria, Marca, 
        Proveedores, Producto, Cliente, Reservas
    ],
    synchronize: true,  // Solo en desarrollo
    logging: false,
});
