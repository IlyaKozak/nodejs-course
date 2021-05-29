import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import dotenv from 'dotenv';

dotenv.config({
  path: path.join(dirname(fileURLToPath(import.meta.url)), '../../.env'),
});

export const {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE,
} = process.env;
