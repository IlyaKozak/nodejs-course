import path from 'path';

import dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, '..', '..', '.env'),
});

export const {
  HOST_ADDRESS,
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE,
  USE_FASTIFY,
  POSTGRES_DOCKER_SERVICE,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_USER,
} = process.env;
