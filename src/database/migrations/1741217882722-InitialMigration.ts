import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1741217882722 implements MigrationInterface {
    name = 'InitialMigration1741217882722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`acceso\` (\`id\` int NOT NULL AUTO_INCREMENT, \`usuario\` varchar(50) NOT NULL, \`contraseña\` varchar(60) NOT NULL, \`usuario_creacion\` varchar(100) NOT NULL, \`fecha_creacion\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`usuario_actualizacion\` varchar(100) NULL, \`fecha_actualizacion\` timestamp NULL, \`estado\` tinyint NOT NULL DEFAULT '1', UNIQUE INDEX \`IDX_687151e79fca829d1cb18965be\` (\`usuario\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(50) NOT NULL, \`usuario_creacion\` varchar(100) NOT NULL, \`fecha_creacion\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`usuario_actualizacion\` varchar(100) NULL, \`fecha_actualizacion\` timestamp NULL, \`estado\` tinyint NOT NULL DEFAULT '1', UNIQUE INDEX \`IDX_a5be7aa67e759e347b1c6464e1\` (\`nombre\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`email\` varchar(100) NOT NULL, \`usuario_creacion\` varchar(100) NOT NULL, \`fecha_creacion\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`usuario_actualizacion\` varchar(100) NULL, \`fecha_actualizacion\` timestamp NULL, \`estado\` tinyint NOT NULL DEFAULT '1', \`id_acceso\` int NULL, \`id_rol\` int NULL, UNIQUE INDEX \`IDX_446adfc18b35418aac32ae0b7b\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cliente\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`correo\` varchar(100) NOT NULL, \`telefono\` varchar(20) NULL, \`usuario_creacion\` varchar(100) NOT NULL, \`fecha_creacion\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`usuario_actualizacion\` varchar(100) NULL, \`fecha_actualizacion\` timestamp NULL, \`estado\` tinyint NOT NULL DEFAULT '1', UNIQUE INDEX \`IDX_32f314a34d03207e219fc9f383\` (\`correo\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`reservas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fecha_inicio\` date NOT NULL, \`fecha_fin\` date NOT NULL, \`usuario_creacion\` varchar(100) NOT NULL, \`fecha_creacion\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`usuario_actualizacion\` varchar(100) NULL, \`fecha_actualizacion\` timestamp NULL, \`estado\` tinyint NOT NULL DEFAULT '1', \`id_cliente\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`estatus_cotizaciones\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(50) NOT NULL, UNIQUE INDEX \`IDX_ec62902dd9f0db90701faf9a67\` (\`nombre\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`lugares\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(50) NOT NULL, UNIQUE INDEX \`IDX_8684a59473962b758bae8b5d3a\` (\`nombre\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cotizaciones\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fecha\` date NOT NULL, \`monto_total\` decimal(10,2) NOT NULL DEFAULT '0.00', \`folio\` varchar(50) NOT NULL, \`subtotal_letra\` varchar(255) NULL, \`id_cliente\` int NULL, \`id_estatus\` int NULL, \`id_lugar\` int NULL, UNIQUE INDEX \`IDX_eaf6575d449b4a18b29912237a\` (\`folio\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`historial_cotizaciones\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fecha_modificacion\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`accion\` varchar(255) NULL, \`usuario\` varchar(100) NULL, \`id_cotizacion\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`categoria\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre_categoria\` varchar(100) NOT NULL, \`usuario_creacion\` varchar(100) NOT NULL, \`fecha_creacion\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`usuario_actualizacion\` varchar(100) NULL, \`fecha_actualizacion\` timestamp NULL, \`estado\` tinyint NOT NULL DEFAULT '1', UNIQUE INDEX \`IDX_a0549fb07a4c7e3cd880c6c8ae\` (\`nombre_categoria\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`marca\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre_marca\` varchar(100) NOT NULL, \`usuario_creacion\` varchar(100) NOT NULL, \`fecha_creacion\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`usuario_actualizacion\` varchar(100) NULL, \`fecha_actualizacion\` timestamp NULL, \`estado\` tinyint NOT NULL DEFAULT '1', UNIQUE INDEX \`IDX_d68c54e99cda36ae2acb120797\` (\`nombre_marca\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`proveedores\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`contacto\` varchar(100) NULL, \`producto_suministrado\` varchar(255) NULL, \`usuario_creacion\` varchar(100) NOT NULL, \`fecha_creacion\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`usuario_actualizacion\` varchar(100) NULL, \`fecha_actualizacion\` timestamp NULL, \`estado\` tinyint NOT NULL DEFAULT '1', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`producto\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nombre\` varchar(100) NOT NULL, \`cantidad_total\` int NOT NULL, \`precio\` decimal(10,2) NOT NULL, \`usuario_creacion\` varchar(100) NOT NULL, \`fecha_creacion\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`usuario_actualizacion\` varchar(100) NULL, \`fecha_actualizacion\` timestamp NULL, \`estado\` tinyint NOT NULL DEFAULT '1', \`id_marca\` int NULL, \`id_categoria\` int NULL, \`id_proveedor\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`detalle_reserva\` (\`id\` int NOT NULL AUTO_INCREMENT, \`cantidad\` int NOT NULL, \`usuario_creacion\` varchar(100) NOT NULL, \`fecha_creacion\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP, \`usuario_actualizacion\` varchar(100) NULL, \`fecha_actualizacion\` timestamp NULL, \`estado\` tinyint NOT NULL DEFAULT '1', \`id_reserva\` int NOT NULL, \`id_producto\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD CONSTRAINT \`FK_f016eb7b9700f08a4243c18ba29\` FOREIGN KEY (\`id_acceso\`) REFERENCES \`acceso\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD CONSTRAINT \`FK_98bf89ebf4b0be2d3825f54e56c\` FOREIGN KEY (\`id_rol\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reservas\` ADD CONSTRAINT \`FK_3380e97aa0b9269b7b27a498749\` FOREIGN KEY (\`id_cliente\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cotizaciones\` ADD CONSTRAINT \`FK_75ab3bc50a70ad252a31aa25ac1\` FOREIGN KEY (\`id_cliente\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cotizaciones\` ADD CONSTRAINT \`FK_51bb07dee7667f01be053768f79\` FOREIGN KEY (\`id_estatus\`) REFERENCES \`estatus_cotizaciones\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cotizaciones\` ADD CONSTRAINT \`FK_4ce8a9652dde653fb38c52aaca9\` FOREIGN KEY (\`id_lugar\`) REFERENCES \`lugares\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`historial_cotizaciones\` ADD CONSTRAINT \`FK_b6b58fe33ea017050d1632e3079\` FOREIGN KEY (\`id_cotizacion\`) REFERENCES \`cotizaciones\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`producto\` ADD CONSTRAINT \`FK_116783c6bfbff483096740514be\` FOREIGN KEY (\`id_marca\`) REFERENCES \`marca\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`producto\` ADD CONSTRAINT \`FK_e87a319f3da1b6da5fedd1988be\` FOREIGN KEY (\`id_categoria\`) REFERENCES \`categoria\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`producto\` ADD CONSTRAINT \`FK_594d83bcc50933f539fc7280561\` FOREIGN KEY (\`id_proveedor\`) REFERENCES \`proveedores\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detalle_reserva\` ADD CONSTRAINT \`FK_b8a13cb756fc7633c18d51937d5\` FOREIGN KEY (\`id_reserva\`) REFERENCES \`reservas\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detalle_reserva\` ADD CONSTRAINT \`FK_9078b7e0581075026c00ada2522\` FOREIGN KEY (\`id_producto\`) REFERENCES \`producto\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`detalle_reserva\` DROP FOREIGN KEY \`FK_9078b7e0581075026c00ada2522\``);
        await queryRunner.query(`ALTER TABLE \`detalle_reserva\` DROP FOREIGN KEY \`FK_b8a13cb756fc7633c18d51937d5\``);
        await queryRunner.query(`ALTER TABLE \`producto\` DROP FOREIGN KEY \`FK_594d83bcc50933f539fc7280561\``);
        await queryRunner.query(`ALTER TABLE \`producto\` DROP FOREIGN KEY \`FK_e87a319f3da1b6da5fedd1988be\``);
        await queryRunner.query(`ALTER TABLE \`producto\` DROP FOREIGN KEY \`FK_116783c6bfbff483096740514be\``);
        await queryRunner.query(`ALTER TABLE \`historial_cotizaciones\` DROP FOREIGN KEY \`FK_b6b58fe33ea017050d1632e3079\``);
        await queryRunner.query(`ALTER TABLE \`cotizaciones\` DROP FOREIGN KEY \`FK_4ce8a9652dde653fb38c52aaca9\``);
        await queryRunner.query(`ALTER TABLE \`cotizaciones\` DROP FOREIGN KEY \`FK_51bb07dee7667f01be053768f79\``);
        await queryRunner.query(`ALTER TABLE \`cotizaciones\` DROP FOREIGN KEY \`FK_75ab3bc50a70ad252a31aa25ac1\``);
        await queryRunner.query(`ALTER TABLE \`reservas\` DROP FOREIGN KEY \`FK_3380e97aa0b9269b7b27a498749\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP FOREIGN KEY \`FK_98bf89ebf4b0be2d3825f54e56c\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP FOREIGN KEY \`FK_f016eb7b9700f08a4243c18ba29\``);
        await queryRunner.query(`DROP TABLE \`detalle_reserva\``);
        await queryRunner.query(`DROP TABLE \`producto\``);
        await queryRunner.query(`DROP TABLE \`proveedores\``);
        await queryRunner.query(`DROP INDEX \`IDX_d68c54e99cda36ae2acb120797\` ON \`marca\``);
        await queryRunner.query(`DROP TABLE \`marca\``);
        await queryRunner.query(`DROP INDEX \`IDX_a0549fb07a4c7e3cd880c6c8ae\` ON \`categoria\``);
        await queryRunner.query(`DROP TABLE \`categoria\``);
        await queryRunner.query(`DROP TABLE \`historial_cotizaciones\``);
        await queryRunner.query(`DROP INDEX \`IDX_eaf6575d449b4a18b29912237a\` ON \`cotizaciones\``);
        await queryRunner.query(`DROP TABLE \`cotizaciones\``);
        await queryRunner.query(`DROP INDEX \`IDX_8684a59473962b758bae8b5d3a\` ON \`lugares\``);
        await queryRunner.query(`DROP TABLE \`lugares\``);
        await queryRunner.query(`DROP INDEX \`IDX_ec62902dd9f0db90701faf9a67\` ON \`estatus_cotizaciones\``);
        await queryRunner.query(`DROP TABLE \`estatus_cotizaciones\``);
        await queryRunner.query(`DROP TABLE \`reservas\``);
        await queryRunner.query(`DROP INDEX \`IDX_32f314a34d03207e219fc9f383\` ON \`cliente\``);
        await queryRunner.query(`DROP TABLE \`cliente\``);
        await queryRunner.query(`DROP INDEX \`IDX_446adfc18b35418aac32ae0b7b\` ON \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
        await queryRunner.query(`DROP INDEX \`IDX_a5be7aa67e759e347b1c6464e1\` ON \`roles\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_687151e79fca829d1cb18965be\` ON \`acceso\``);
        await queryRunner.query(`DROP TABLE \`acceso\``);
    }

}
