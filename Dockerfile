# Usa una imagen oficial de Node.js como base
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package*.json tsconfig.json ./

# Instala las dependencias
RUN npm install

# Copia toda la aplicación, incluyendo `src/`
COPY . .

# Compilar TypeScript a JavaScript antes de ejecutar el servidor
RUN npm run build

# Expone el puerto en el que corre la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación en producción
CMD ["node", "dist/index.js"]
