import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

// Determinar el host adecuado
const isLocal = process.env.RUNNING_ENV === "local"; // Agrega esto en el .env
const dbHost = isLocal ? "localhost" : process.env.MYSQL_HOST || "mysql";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: dbHost,
    port: Number(process.env.MYSQL_PORT) || 3306,
    username: process.env.MYSQL_USER || "myuser",
    password: process.env.MYSQL_PASSWORD || "mypassword",
    database: process.env.MYSQL_DATABASE || "mydatabase",
    entities: isLocal ? ["src/entities/*.ts"] : ["dist/entities/*.js"],
    migrations: isLocal ? ["src/database/migrations/*.ts"] : ["dist/database/migrations/*.js"],
    synchronize: false, // ❌ NO usar en producción
    logging: true,
});
