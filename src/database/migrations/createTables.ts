import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

import { TABLE } from '../../common/constants';

export class CreateTables1624013666751 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: TABLE.USERS,
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isUnique: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'login',
            type: 'varchar',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: TABLE.BOARDS,
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isUnique: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: TABLE.TASKS,
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            isUnique: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'order',
            type: 'int',
            isNullable: true,
            default: null,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'userId',
            type: 'uuid',
            isNullable: true,
            default: null,
          },
          {
            name: 'boardId',
            type: 'uuid',
            isNullable: true,
            default: null,
          },
          {
            name: 'columnId',
            type: 'uuid',
            isNullable: true,
            default: null,
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: TABLE.COLUMNS,
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'order',
            type: 'int',
          },
          {
            name: 'boardId',
            type: 'uuid',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      TABLE.COLUMNS,
      new TableForeignKey({
        columnNames: ['boardId'],
        referencedColumnNames: ['id'],
        referencedTableName: TABLE.BOARDS,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLE.TASKS);

    await queryRunner.dropTable(TABLE.COLUMNS);

    await queryRunner.dropTable(TABLE.BOARDS);

    await queryRunner.dropTable(TABLE.USERS);
  }
}
