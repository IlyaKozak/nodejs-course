import 'reflect-metadata';
import { createConnection, getRepository } from 'typeorm';

// import app from './app';
// import { PORT } from './common/config';
import { User as UserRepo } from './db/entities';
import { User } from './modules/users/user.model';
import { dbConfig } from './db/ormconfig';
import logger from './utils/logger';

createConnection(dbConfig)
  .then(async (connection) => {
    logger.info('DB connection is established');

    // uncomment to undo migration
    // await connection.undoLastMigration();
    // logger.info('DB migrations successfully revert');

    const migrationsResults = await connection.runMigrations();
    if (migrationsResults[0]) {
      logger.info('DB migrations successfully run');
    }

    // add admin user if not exists
    if (!(await getRepository(UserRepo).findOne({ login: 'admin' }))) {
      const adminUser = new User({
        name: 'admin',
        login: 'admin',
        password: 'admin',
      });

      await getRepository(UserRepo).save(adminUser);
      logger.info('Add admin user to DB.');
    }

    // app.listen(PORT, () => {
    //   logger.info(`App is listing on port: ${PORT}.`);
    // });
  })
  .catch((error) => {
    logger.error(`Error occured: ${error}`);
  });
