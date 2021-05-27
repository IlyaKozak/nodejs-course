const { v4: uuid } = require('uuid');

/**
 * User type
 * @typedef TUser
 * @property {string} id - User's id
 * @property {string} name - User's name
 * @property {string} login - User's login
 * @property {string} password - User's password
 */

/**
 * User response type (without password)
 * @typedef TUserResponse
 * @property {string} id - User's id
 * @property {string} name - User's name
 * @property {string} login - User's login
 */

/**
 * Class to create a user object
 */
class User {
  /**
   * Create a user
   * @param {Object} user - User object
   * @param {string} [user.id] - User's id
   * @param {string} [user.name] - User's name
   * @param {string} [user.login] - User's login
   * @param {string} [user.password] - User's password
   */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    /**
     * @property {string} id - User's id
     */
    this.id = id;
    /**
     * @property {string} name - User's name
     */
    this.name = name;
    /**
     * @property {string} login - User's login
     */
    this.login = login;
    /**
     * @property {string} password - User's password
     */
    this.password = password;
  }

  /**
   * Static method to return user without password.
   * @param {TUser} user - User with all data
   * @returns {TUserResponse} - User response (without password)
   * @static
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
