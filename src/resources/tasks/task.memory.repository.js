const db = require('../../db/in-memory-db');
const TABLE = require('../../common/constants');

const { TASKS } = TABLE;

// eslint-disable-next-line no-unused-vars
const { TBoard } = require('../boards/board.model.js');
// eslint-disable-next-line no-unused-vars
const { TTask } = require('./task.model.js');
// eslint-disable-next-line no-unused-vars
const { TUser } = require('../users/user.model.js');

/**
 * Task Memory Repository
 * @namespace TaskRepository
 */

/**
 * Calls DBMS method postEntity to insert task
 * @memberof TaskRepository
 * @instance
 * @function
 * @param {TTask} entity - Task to insert
 * @returns {Promise<(TTask|TUser|TBoard)>} - Returns promise of inserted task
 */
const create = async (entity) => db.postEntity(TASKS, entity);

/**
 * Calls DBMS method getAllEntities to get all tasks
 * @memberof TaskRepository
 * @instance
 * @function
 * @returns {Promise<(TTask[]|TUser[]|TBoard[])>} - Returns promise of all tasks
 */
const readAll = async () => db.getAllEntities(TASKS);

/**
 * Calls DBMS method getEntityById to get task by id
 * @memberof TaskRepository
 * @instance
 * @function
 * @param {string} id - Task's id
 * @returns {Promise<(TTask|TUser|TBoard|undefined)>} - Returns promise of a task or undefined
 */
const readById = async (id) => db.getEntityById(TASKS, id);

/**
 * Calls DBMS method putEntity to update task by id
 * @memberof TaskRepository
 * @instance
 * @function
 * @param {string} id - Task's id
 * @param {TTask} entityToUpdate - Task to update
 * @returns {Promise<(TTask|TUser|TBoard|undefined)>} - Returns promise of updated task or undefined
 */
const updateById = async (id, entityToUpdate) => db.putEntity(TASKS, id, entityToUpdate);

/**
 * Calls DBMS method deleteEntity to delete task by id
 * @memberof TaskRepository
 * @instance
 * @function
 * @param {string} id - Task's id
 * @returns {Promise<?Object>} - Returns promise of empty object or undefined
 */
const deleteById = async (id) => db.deleteEntity(TASKS, id);

module.exports = { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
