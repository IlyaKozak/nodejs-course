import {
  PostgresConnectionOptions,
} from 'typeorm/driver/postgres/PostgresConnectionOptions';

import {
  POSTGRES_ADDRESS,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} from '../common/config';
import {
  User, Board, Column, Task,
} from './entities';
import {
  CreateTables1624013666751,
} from './migration/createTables';

export const dbConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_ADDRESS,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: [User, Board, Column, Task],
  migrations: [CreateTables1624013666751],
};
