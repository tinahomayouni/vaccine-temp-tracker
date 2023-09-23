import { MigrationInterface, QueryRunner } from 'typeorm';

export class RemoveFahrenheit1695308421365 implements MigrationInterface {
  name = 'RemoveFahrenheit1695308421365';

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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "temperature" RENAME TO "temporary_temperature"`,
    );

    await queryRunner.query(
      `CREATE TABLE "temperature" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "celsius" real, "fahrenheit" real, "timestamp" real)`,
    );

    await queryRunner.query(
      `INSERT INTO "temperature"("id", "celsius", "fahrenheit", "timestamp") 
       SELECT "id", "celsius", ("celsius" * 9.0 / 5.0) + 32, "timestamp" FROM "temporary_temperature"`,
    );

    await queryRunner.query(`DROP TABLE "temporary_temperature"`);
  }
}
