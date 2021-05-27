const TABLE = require('../common/constants');

const { USERS, BOARDS } = TABLE;

// eslint-disable-next-line no-unused-vars
const { TBoard } = require('../resources/boards/board.model.js');
// eslint-disable-next-line no-unused-vars
const { TTask } = require('../resources/tasks/task.model.js');
// eslint-disable-next-line no-unused-vars
const { TUser } = require('../resources/users/user.model.js');

/**
 * Database management system
 * @namespace DBMS
 */
const DBMS = (() => {
  const DB = {
    USERS: [],
    BOARDS: [],
    TASKS: [],
    /**
     * Returns DB table rows
     * @memberof DBMS
     * @instance
     * @method
     * @param {('USERS'|'BOARDS'|'TASKS')} table - DB table name
     * @returns {(Array<TUser>|Array<TBoard>|Array<TTask>)} - DB table rows
     */
    getAllEntities(table) {
      return DB[table];
    },
    /**
     * Returns DB entity by id
     * @memberof DBMS
     * @instance
     * @method
     * @param {('USERS'|'BOARDS'|'TASKS')} table - DB table name
     * @param {string} id - user.id or board.id or task.id
     * @returns {(TUser|TBoard|TTask|undefined)} - DB entity
     */
    getEntityById(table, id) {
      return DB[table].find((entity) => entity.id === id);
    },
    /**
     * Inserts DB entity and returns it
     * @memberof DBMS
     * @instance
     * @method
     * @param {('USERS'|'BOARDS'|'TASKS')} table - DB table name
     * @param {(TUser|TBoard|TTask)} entity - DB entity to insert
     * @returns {(TUser|TBoard|TTask)} - inserted DB entity
     */
    postEntity(table, entity) {
      DB[table].push(entity);
      return entity;
    },
    /**
     * Updates DB entity and returns it
     * @memberof DBMS
     * @instance
     * @method
     * @param {('USERS'|'BOARDS'|'TASKS')} table - DB table name
     * @param {string} id - user.id or board.id or task.id
     * @param {(TUser|TBoard|TTask)} entityToUpdate - Entity with updated fields
     * @returns {(TUser|TBoard|TTask)} - Updated Entity
     */
    putEntity(table, id, entityToUpdate) {
      const entityIdx = DB[table].findIndex((entity) => entity.id === id);
      if (entityIdx === -1) return undefined;
      
      const entity = DB[table][entityIdx];
      Object.keys(entity).forEach((key) => {
        if (entityToUpdate[key] !== undefined) {
          entity[key] = entityToUpdate[key];
        }
      });
      return DB[table][entityIdx];
    },
    /**
     * Deletes entity if it exists or returns null
     * @memberof DBMS
     * @instance
     * @method
     * @param {('USERS'|'BOARDS'|'TASKS')} table - DB table name
     * @param {string} id - user.id or board.id or task.id
     * @returns {?Object} - null or empty object
     */
    deleteEntity(table, id) {
      const entityIdx = DB[table].findIndex((entity) => entity.id === id);
      if (entityIdx === -1) return null;

      DB[table].splice(entityIdx, 1);
      DB.cleanUpTasks(table, id);
      return {};
    },
    /**
     * Deletes tasks for user.id or board.id
     * @param {('USERS'|'BOARDS'|'TASKS')} table - DB table name
     * @param {string} id - user.id
     * @returns {void}
     */
    cleanUpTasks(table, id) {
      if (table === USERS) {
        DB.TASKS = DB.TASKS.map((task) => {
          if (task.userId === id) {
            return {
              ...task,
              userId: null,
            };
          }
          return task;
        });
      }
      if (table === BOARDS) {
        DB.TASKS = DB.TASKS.filter((task) => task.boardId !== id);
      }
    }
  };

  return {
    getAllEntities: DB.getAllEntities,
    getEntityById: DB.getEntityById,
    postEntity: DB.postEntity,
    putEntity: DB.putEntity,
    deleteEntity: DB.deleteEntity,
  }
})();

module.exports = DBMS;
