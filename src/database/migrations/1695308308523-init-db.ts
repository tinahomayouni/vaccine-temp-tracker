import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDb1695308308523 implements MigrationInterface {
    name = 'InitDb1695308308523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temperature" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "celsius" real, "fahrenheit" real, "timestamp" real)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "temperature"`);
    }

}
