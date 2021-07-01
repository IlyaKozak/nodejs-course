enum TABLE {
  USERS = 'users',
  BOARDS = 'boards',
  COLUMNS = 'columns',
  TASKS = 'tasks',
}

const DEFAULT_PORT = 4000;

const DEFAULT_SALT_LENGTH = 10;

const DEFAULT_APP_PLATFORM = 'express';

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
  DEFAULT_APP_PLATFORM,
  TABLE,
  DEFAULT_PORT,
  DEFAULT_SALT_LENGTH,
  UNAUTHORIZED_PATHS,
};
