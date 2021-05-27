const db = require('../../db/in-memory-db');
const TABLE = require('../../common/constants');

const { BOARDS } = TABLE;

// eslint-disable-next-line no-unused-vars
const { TBoard } = require('./board.model.js');
// eslint-disable-next-line no-unused-vars
const { TTask } = require('../tasks/task.model.js');
// eslint-disable-next-line no-unused-vars
const { TUser } = require('../users/user.model.js');

/**
 * Board Memory Repository
 * @namespace BoardRepository
 */

/**
 * Calls DBMS method postEntity to insert board
 * @memberof BoardRepository
 * @instance
 * @function
 * @param {TBoard} entity - Board to insert
 * @returns {Promise<(TBoard|TUser|TTask)>} - Returns promise of inserted board
 */
const create = async (entity) => db.postEntity(BOARDS, entity);

/**
 * Calls DBMS method getAllEntities to get all boards
 * @memberof BoardRepository
 * @instance
 * @function
 * @returns {Promise<(TBoard[]|TUser[]|TTask[])>} - Returns promise of all boards
 */
const readAll = async () => db.getAllEntities(BOARDS);

/**
 * Calls DBMS method getEntityById to get board by id
 * @memberof BoardRepository
 * @instance
 * @function
 * @param {string} id - Board's id
 * @returns {Promise<(TBoard|TUser|TTask|undefined)>} - Returns promise of a board or undefined
 */
const readById = async (id) => db.getEntityById(BOARDS, id);

/**
 * Calls DBMS method putEntity to update board by id
 * @memberof BoardRepository
 * @instance
 * @function
 * @param {string} id - Board's id
 * @param {TBoard} entityToUpdate - Board to update
 * @returns {Promise<(TBoard|TUser|TTask|undefined)>} - Returns promise of updated board or undefined
 */
const updateById = async (id, entityToUpdate) => db.putEntity(BOARDS, id, entityToUpdate);

/**
 * Calls DBMS method deleteEntity to delete board by id
 * @memberof BoardRepository
 * @instance
 * @function
 * @param {string} id - Board's id
 * @returns {Promise<?Object>} - Returns promise of empty object or undefined
 */
const deleteById = async (id) => db.deleteEntity(BOARDS, id);

module.exports = { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
