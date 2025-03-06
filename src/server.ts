import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

// Importar rutas
import usuariosRoutes from "./services/usuarios";

const app = express();

// Middlewares USAR EN PRODUCCION PARA SEGURIDAD
//app.use(cors({
//    origin: process.env.FRONTEND_URL || "http://localhost:3000", // Carga desde .env
//    methods: ["GET", "POST", "PUT", "DELETE"],
//    allowedHeaders: ["Content-Type", "Authorization"]
//}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api/usuarios", usuariosRoutes);

// Ruta principal
app.get("/", (req, res) => {
    res.send("🚀 Nahual Company hasta la muerte.");
});

// 🚀 No iniciamos el servidor aquí, solo exportamos `app`
export default app;
