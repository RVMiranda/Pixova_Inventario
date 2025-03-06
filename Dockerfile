# Usa una imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación al contenedor
COPY . .

# Asegurar que TypeScript se compila antes de ejecutar la aplicación
RUN npm run build

# Exponer el puerto en el que la aplicación va a escuchar
EXPOSE 3000

# Comando para ejecutar la aplicación en producción
CMD ["sh", "-c", "node dist/index.js"]

