# Pixova_Inventario
Repositorio para subir el codigo el proyecto de la gestión de inventarios de Pixova

# Instrucciones de instalacion
## Usando docker:
    > docker-compose up

## En maquina local:
    > $ npm install 

### Modos de arranque:
- Para ejecuta el servidor con ts-node (para desarrollo):
    > npm run dev

- Para compilar TypeScript y genera la carpeta dist/:
    > npm run build

- Para ejecutar el servidor desde dist/index.js (para producción):
    > npm run start

- Para crear una nueva migración en src/database/migrations/:
    > npm run migration:generate

- Para ejecutar las migraciones y aplica cambios en la base de datos:
    > npm run migration:run

- Para revertir la última migración aplicada:
    > npm run migration:revert

### Proyecto desarrollado por: NahualCompany