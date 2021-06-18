import { ConnectionOptions } from 'typeorm';

import {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} from '../common/config';
import {
  User, Board, Column, Task,
} from './entities';

export const dbConfig: ConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: true,
  // logging: true,
  entities: [
    User,
    Board,
    Column,
    Task,
  ],
  migrations: [
    'src/db/migration/**/*.ts',
  ],
  cli: {
    entitiesDir: 'src/db/entities',
    migrationsDir: 'src/db/migration',
  },
};
