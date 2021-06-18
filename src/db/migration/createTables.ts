import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1624013666751 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "name" character varying NOT NULL, 
        "login" character varying NOT NULL, 
        "password" character varying NOT NULL, 
        CONSTRAINT uniqueLogin UNIQUE ("login"), 
        CONSTRAINT userIdPrimaryKey PRIMARY KEY ("id")
      )`,
    );

    await queryRunner.query(
      `CREATE TABLE "board" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "title" character varying NOT NULL, 
        CONSTRAINT boardIdPrimaryKey PRIMARY KEY ("id")
      )`,
    );

    await queryRunner.query(
      `CREATE TABLE "column" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "title" character varying NOT NULL, 
        "order" integer, "boardId" uuid, 
        CONSTRAINT columnIdPrimaryKey PRIMARY KEY ("id")
      )`,
    );

    await queryRunner.query(
      `CREATE TABLE "task" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "title" character varying NOT NULL, 
        "order" integer, 
        "description" character varying NOT NULL, 
        "userId" character varying, 
        "boardId" character varying, 
        "columnId" character varying, 
        CONSTRAINT taskIdPrimaryKey PRIMARY KEY ("id")
      )`,
    );

    await queryRunner.query(
      `ALTER TABLE "column" 
        ADD CONSTRAINT columnForeignKey
        FOREIGN KEY ("boardId") REFERENCES "board"("id") 
        ON DELETE CASCADE 
        ON UPDATE NO ACTION`,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP TABLE "task"',
    );

    await queryRunner.query(
      'DROP TABLE "column"',
    );

    await queryRunner.query(
      'DROP TABLE "board"',
    );

    await queryRunner.query(
      'DROP TABLE "user"',
    );
  }
}
