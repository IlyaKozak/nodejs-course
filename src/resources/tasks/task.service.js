const tasksRepo = require('./task.memory.repository');

// eslint-disable-next-line no-unused-vars
const { TBoard } = require('../boards/board.model.js');
// eslint-disable-next-line no-unused-vars
const { TTask } = require('./task.model.js');
// eslint-disable-next-line no-unused-vars
const { TUser } = require('../users/user.model.js');

/**
 * User Sevice
 * @namespace TaskService
 */

/**
 * Calls TaskRepository method create to create task
 * @memberof TaskService
 * @instance
 * @function
 * @param {TTask} task - Task to create
 * @returns {Promise<(TTask|TUser|TBoard)>} - Returns promise of created task
 */
const create = (task) => tasksRepo.create(task);

/**
 * Calls TaskRepository method readAll to read all tasks
 * @memberof TaskService
 * @instance
 * @function
 * @returns {Promise<(TTask[]|TUser[]|TBoard[])>} - Returns promise of all tasks
 */
const readAll = () => tasksRepo.readAll();

/**
 * Calls TaskRepository method readById to read task by id
 * @memberof TaskService
 * @instance
 * @function
 * @param {string} id - Task's id
 * @returns {Promise<(TTask|TUser|TBoard|undefined)>} - Returns promise of a task or undefined
 */
const readById = (id) => tasksRepo.readById(id);

/**
 * Calls TaskRepository method updateById to update task by id
 * @memberof TaskService
 * @instance
 * @function
 * @param {string} id - Task's id
 * @param {TTask} id - Task to update
 * @returns {Promise<(TTask|TUser|TBoard|undefined)>} - Returns promise of updated task or undefined
 */
const updateById = (id, taskUpdate) => tasksRepo.updateById(id, taskUpdate);

/**
 * Calls TaskRepository method updateById to delete task by id
 * @memberof TaskService
 * @instance
 * @function
 * @param {string} id - Task's id
 * @returns {Promise<?Object>} - Returns promise of empty object or undefined
 */
const deleteById = (id) => tasksRepo.deleteById(id);

module.exports = { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
