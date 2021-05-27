const { v4: uuid } = require('uuid');

// eslint-disable-next-line no-unused-vars
const { TColumn } = require('../columns/column.model.js');

/**
 * Board type
 * @typedef TBoard
 * @property {string} id - Board's id
 * @property {string} title - Board's title
 * @property {Set<TColumn>} columns - Board's columns
 */

/**
 * Class to create a board object
 */
class Board {
  /**
   * Create a board
   * @param {Object} board
   * @param {string} [board.id] - Board's id
   * @param {string} [board.title] - Board's title
   * @param {Set<TColumn>} [board.columns] - Board's columns
   */
  constructor({
    id = uuid(),
    title = 'BOARD',
    columns = new Set(),
  } = {}) {
    /**
     * @property {string} id - Board's id
     */
    this.id = id;
    /**
     * @property {string} [board.title] - Board's title
     */
    this.title = title;
    /**
     * @property {Set<TColumn>} [board.columns] - Board's columns
     */
    this.columns = columns;
  }
}

module.exports = Board;
