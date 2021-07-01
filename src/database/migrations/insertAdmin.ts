import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertAdmin1624196113786 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public.users (id, name, login, password)
       VALUES ('d822f848-bbd6-4a3b-a9dc-117d897867d9', 'admin', 'admin', '$2a$10$kyOK1obJqOYC.VsAFg4ih.3A.QDU.KmkSzRZPBb8U6jnIZmN1MSb.');`,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM public.users WHERE login = 'admin';`);
  }
}
