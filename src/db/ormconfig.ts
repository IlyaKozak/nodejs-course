import { ConnectionOptions } from 'typeorm';

import {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} from '../common/config';
import { User } from './entities/User';
import { Board } from './entities/Board';
import { Column } from './entities/Column';

export const dbConfig: ConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [
    User,
    Board,
    Column,
  ],
  migrations: [
    'src/db/migration/**/*.ts',
  ],
  cli: {
    entitiesDir: 'src/db/entities',
    migrationsDir: 'src/db/migration',
  },
};
