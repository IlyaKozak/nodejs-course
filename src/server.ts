import 'reflect-metadata';
import { createConnection } from 'typeorm';

import app from './app';
import { PORT } from './common/config';
import { dbConfig } from './db/ormconfig';
import logger from './utils/logger';

createConnection(dbConfig).then(async (connection) => {
  logger.info('DB connection is established');
  await connection.runMigrations();
  logger.info('DB migrations successfully run');

  app.listen(PORT, () => {
    logger.info(`App is listing on port: ${PORT}.`);
  });
}).catch((error) => {
  logger.error(`Error occured: ${error}`);
});
