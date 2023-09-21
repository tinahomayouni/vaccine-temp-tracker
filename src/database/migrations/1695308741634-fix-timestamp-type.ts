import { MigrationInterface, QueryRunner } from 'typeorm';

export class FixTimestampType1695308741634 implements MigrationInterface {
  name = 'FixTimestampType1695308741634';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_temperature" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "celsius" real, "timestamp" real)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_temperature"("id", "celsius", "timestamp") SELECT "id", "celsius", "timestamp" FROM "temperature"`,
    );
    await queryRunner.query(`DROP TABLE "temperature"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_temperature" RENAME TO "temperature"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_temperature" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "celsius" real, "timestamp" date)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_temperature"("id", "celsius", "timestamp") SELECT "id", "celsius", "timestamp" FROM "temperature"`,
    );
    await queryRunner.query(`DROP TABLE "temperature"`);
    await queryRunner.query(
      `ALTER TABLE "temporary_temperature" RENAME TO "temperature"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "temperature" RENAME TO "temporary_temperature"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temperature" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "celsius" real, "timestamp" real)`,
    );
    await queryRunner.query(
      `INSERT INTO "temperature"("id", "celsius", "timestamp") SELECT "id", "celsius", "timestamp" FROM "temporary_temperature"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_temperature"`);
    await queryRunner.query(
      `ALTER TABLE "temperature" RENAME TO "temporary_temperature"`,
    );
    await queryRunner.query(
      `CREATE TABLE "temperature" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "celsius" real, "timestamp" real)`,
    );
    await queryRunner.query(
      `INSERT INTO "temperature"("id", "celsius", "timestamp") SELECT "id", "celsius", "timestamp" FROM "temporary_temperature"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_temperature"`);
  }
}
