const boardsRepo = require('./board.memory.repository');

// eslint-disable-next-line no-unused-vars
const { TBoard } = require('./board.model.js');
// eslint-disable-next-line no-unused-vars
const { TTask } = require('../tasks/task.model.js');
// eslint-disable-next-line no-unused-vars
const { TUser } = require('../users/user.model.js');

/**
 * User Sevice
 * @namespace BoardService
 */

/**
 * Calls BoardRepository method create to create board
 * @memberof BoardService
 * @instance
 * @function
 * @param {TBoard} board - Board to create
 * @returns {Promise<(TBoard|TUser|TTask)>} - Returns promise of created board
 */
const create = (board) => boardsRepo.create(board);

/**
 * Calls BoardRepository method readAll to read all boards
 * @memberof BoardService
 * @instance
 * @function
 * @returns {Promise<(TBoard[]|TUser[]|TTask[])>} - Returns promise of all boards
 */
const readAll = () => boardsRepo.readAll();

/**
 * Calls BoardRepository method readById to read board by id
 * @memberof BoardService
 * @instance
 * @function
 * @param {string} id - Board's id
 * @returns {Promise<(TBoard|TUser|TTask|undefined)>} - Returns promise of a board or undefined
 */
const readById = (id) => boardsRepo.readById(id);

/**
 * Calls BoardRepository method updateById to update board by id
 * @memberof BoardService
 * @instance
 * @function
 * @param {string} id - Board's id
 * @param {TBoard} id - Board to update
 * @returns {Promise<(TBoard|TUser|TTask|undefined)>} - Returns promise of updated board or undefined
 */
const updateById = (id, boardUpdate) => boardsRepo.updateById(id, boardUpdate);

/**
 * Calls BoardRepository method updateById to delete board by id
 * @memberof BoardService
 * @instance
 * @function
 * @param {string} id - Board's id
 * @returns {Promise<?Object>} - Returns promise of empty object or undefined
 */
const deleteById = (id) => boardsRepo.deleteById(id);

module.exports = { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
