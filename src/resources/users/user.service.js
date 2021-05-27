const usersRepo = require('./user.memory.repository');

// eslint-disable-next-line no-unused-vars
const { TBoard } = require('../boards/board.model.js');
// eslint-disable-next-line no-unused-vars
const { TTask } = require('../tasks/task.model.js');
// eslint-disable-next-line no-unused-vars
const { TUser } = require('./user.model.js');

/**
 * User Sevice
 * @namespace UserService
 */

/**
 * Calls UserRepository method create to create user
 * @memberof UserService
 * @instance
 * @function
 * @param {TUser} user - User to create
 * @returns {Promise<(TUser|TBoard|TTask)>} - Returns promise of created user
 */
const create = (user) => usersRepo.create(user);

/**
 * Calls UserRepository method readAll to read all users
 * @memberof UserService
 * @instance
 * @function
 * @returns {Promise<(TUser[]|TBoard[]|TTask[])>} - Returns promise of all users
 */
const readAll = () => usersRepo.readAll();

/**
 * Calls UserRepository method readById to read user by id
 * @memberof UserService
 * @instance
 * @function
 * @param {string} id - User's id
 * @returns {Promise<(TUser|TBoard|TTask|undefined)>} - Returns promise of a user or undefined
 */
const readById = (id) => usersRepo.readById(id);

/**
 * Calls UserRepository method updateById to update user by id
 * @memberof UserService
 * @instance
 * @function
 * @param {string} id - User's id
 * @param {TUser} id - User to update
 * @returns {Promise<(TUser|TBoard|TTask|undefined)>} - Returns promise of updated user or undefined
 */
const updateById = (id, userUpdate) => usersRepo.updateById(id, userUpdate);

/**
 * Calls UserRepository method updateById to delete user by id
 * @memberof UserService
 * @instance
 * @function
 * @param {string} id - User's id
 * @returns {Promise<?Object>} - Returns promise of empty object or undefined
 */
const deleteById = (id) => usersRepo.deleteById(id);

module.exports = { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
