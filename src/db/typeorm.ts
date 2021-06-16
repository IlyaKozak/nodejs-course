import { createConnection } from 'typeorm';

import { User } from '../entities/user';
import {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} from '../common/config';

// User.find().then((data) => res.json(data)); - return all
// User.insert({ name: 'Name', }).then((data) => res.json(data));

createConnection({
  type: 'postgres',
  database: POSTGRES_DB,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  logging: true,
  synchronize: true,
  entities: [User],
});
