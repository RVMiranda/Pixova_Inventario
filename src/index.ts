import "reflect-metadata"; // Necesario para TypeORM
import dotenv from "dotenv"; // Cargar variables de entorno
import { AppDataSource } from "./database/data-source"; // Configuración de TypeORM
import app from "./server"; // Importamos el servidor Express

dotenv.config(); // Cargar configuración desde .env

// Conectar la base de datos y levantar el servidor
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
