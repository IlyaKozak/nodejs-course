import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { User } from '../users/entities/user.entity';
import { Task } from '../tasks/entities/task.entity';
import { Board } from '../boards/entities/board.entity';
import { Column } from '../boards/entities/column.entity';
import { CreateTables1624013666751 } from './migrations/createTables';
import { InsertAdmin1624196113786 } from './migrations/insertAdmin';

export const ormconfig: PostgresConnectionOptions = {
  type: 'postgres',
  // host: POSTGRES_DOCKER_SERVICE,
  host: 'localhost',
  port: 5433,
  // username: POSTGRES_USER,
  username: 'nodejs',
  password: 'nodejs',
  // password: POSTGRES_PASSWORD,
  database: 'postgres',
  synchronize: false,
  logging: true,
  entities: [User, Board, Column, Task],
  migrations: [CreateTables1624013666751, InsertAdmin1624196113786],
  migrationsRun: true,
};

export default ormconfig;
