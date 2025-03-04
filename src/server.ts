import express from "express";
import cors from "cors";
import morgan from "morgan";

// Importar rutas
import usuariosRoutes from "./services/usuarios";

const app = express();

// Middlewares
app.use(cors({
    origin: "http://mi-frontend.com", //Configurar para permitir peticiones desde el frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
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
