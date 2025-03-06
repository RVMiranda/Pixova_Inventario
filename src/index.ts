import "reflect-metadata"; // Necesario para TypeORM
import dotenv from "dotenv"; // Cargar variables de entorno
import { AppDataSource } from "./database/data-source"; // Configuración de TypeORM
import app from "./server"; // Importamos el servidor Express

dotenv.config(); // Cargar configuración desde .env

// Verificar que las variables de entorno se cargaron correctamente
console.log("📌 Configuración de Base de Datos:");
console.log("MYSQL_HOST:", process.env.MYSQL_HOST);
console.log("MYSQL_PORT:", process.env.MYSQL_PORT);
console.log("MYSQL_USER:", process.env.MYSQL_USER);
console.log("MYSQL_PASSWORD:", process.env.MYSQL_PASSWORD);
console.log("MYSQL_DATABASE:", process.env.MYSQL_DATABASE);

AppDataSource.initialize()
    .then(() => {
        console.log("✅ Conexión a la base de datos establecida.");
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        
        console.error("❌ Error al conectar con la base de datos:", error);
    });
