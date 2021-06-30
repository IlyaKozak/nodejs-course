enum TABLE {
  USERS = 'users',
  BOARDS = 'boards',
  COLUMNS = 'columns',
  TASKS = 'tasks',
}

const DEFAULT_PORT = 4000;

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

export { TABLE, DEFAULT_PORT, UNAUTHORIZED_PATHS };
