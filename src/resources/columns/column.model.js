const { v4: uuid } = require('uuid');

/**
 * Column type
 * @typedef ColumnType
 * @property {string} id - Column's id
 * @property {string} title - Column's title
 * @property {?number} order - Column's order
 */

/**
 * Class to create a column object
 */
class Column {
  /**
   * Create a column
   * @param {Object} column
   * @param {string} [column.id] - Column's id
   * @param {string} [column.title] - Column's title
   * @param {?number} [column.order] - Column's order
   */
  constructor({
    id = uuid(),
    title = 'COLUMN',
    order = null,
  } = {}) {
    /**
     * @property {string} id - Column's id
     */
    this.id = id;
    /**
     * @property {string} title - Column's title
     */
    this.title = title;
    /**
     * @property {?number} order - Column's order
     */
    this.order = order;
  }
}

module.exports = Column;
