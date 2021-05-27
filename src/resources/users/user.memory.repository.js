const db = require('../../db/in-memory-db');
const TABLE = require('../../common/constants');

const { USERS } = TABLE;

// eslint-disable-next-line no-unused-vars
const { TBoard } = require('../boards/board.model.js');
// eslint-disable-next-line no-unused-vars
const { TTask } = require('../tasks/task.model.js');
// eslint-disable-next-line no-unused-vars
const { TUser } = require('./user.model.js');

/**
 * User Memory Repository
 * @namespace UserRepository
 */

/**
 * Calls DBMS method postEntity to insert user
 * @memberof UserRepository
 * @instance
 * @function
 * @param {TUser} entity - User to insert
 * @returns {Promise<(TUser|TBoard|TTask)>} - Returns promise of inserted user
 */
const create = async (entity) => db.postEntity(USERS, entity);

/**
 * Calls DBMS method getAllEntities to get all users
 * @memberof UserRepository
 * @instance
 * @function
 * @returns {Promise<(TUser[]|TBoard[]|TTask[])>} - Returns promise of all users
 */
const readAll = async () => db.getAllEntities(USERS);

/**
 * Calls DBMS method getEntityById to get user by id
 * @memberof UserRepository
 * @instance
 * @function
 * @param {string} id - User's id
 * @returns {Promise<(TUser|TBoard|TTask|undefined)>} - Returns promise of a user or undefined
 */
const readById = async (id) => db.getEntityById(USERS, id);

/**
 * Calls DBMS method putEntity to update user by id
 * @memberof UserRepository
 * @instance
 * @function
 * @param {string} id - User's id
 * @param {TUser} entityToUpdate - User to update
 * @returns {Promise<(TUser|TBoard|TTask|undefined)>} - Returns promise of updated user or undefined
 */
const updateById = async (id, entityToUpdate) => db.putEntity(USERS, id, entityToUpdate);

/**
 * Calls DBMS method deleteEntity to delete user by id
 * @memberof UserRepository
 * @instance
 * @function
 * @param {string} id - User's id
 * @returns {Promise<?Object>} - Returns promise of empty object or undefined
 */
const deleteById = async (id) => db.deleteEntity(USERS, id);

module.exports = { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
