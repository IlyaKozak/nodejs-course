enum TABLE {
  USERS = 'users',
  BOARDS = 'boards',
  COLUMNS = 'columns',
  TASKS = 'tasks',
}

const PORT_DEFAULT = 4000;

const SALT_LENGTH_DEFAULT = 10;

const APP_PLATFORM_DEFAULT = 'express';
const APP_PLATFORM_FASTIFY = 'fastify';

const UNAUTHORIZED_PATHS = [
  '',
  '/doc',
  '/doc/swagger-ui.css',
  '/doc/swagger-ui-standalone-preset.js',
  '/doc/swagger-ui-init.js',
  '/doc/swagger-ui-bundle.js',
  '/doc/favicon-32x32.png',
  '/doc/favicon-16x16.png',
  '/doc/swagger-ui-bundle.js.map',
  '/doc/swagger-ui.css.map',
  '/doc/swagger-ui-standalone-preset.js.map',
  '/login',
];

export {
  PORT_DEFAULT,
  APP_PLATFORM_DEFAULT,
  APP_PLATFORM_FASTIFY,
  SALT_LENGTH_DEFAULT,
  UNAUTHORIZED_PATHS,
  TABLE,
};
