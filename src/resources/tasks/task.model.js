const { v4: uuid } = require('uuid');

/**
 * Task type
 * @typedef TaskType
 * @property {string} id - Task's id
 * @property {string} title - Task's title
 * @property {?number} order - Task's order
 * @property {string} description - Task's description
 * @property {?string} userId - Task's userId
 * @property {?string} boardId - Task's boardId
 * @property {?string} columnId - Task's columnId
 */

/**
 * Class to create a task object
 */
class Task {
  /**
   * Create a task
   * @param {Object} task - Task object
   * @param {string} [task.id] - Task's id
   * @param {string} [task.title] - Task's title
   * @param {?number} [task.order] - Task's order
   * @param {string} [task.description] - Task's description
   * @param {?string} [task.userId] - Task's userId
   * @param {?string} [task.boardId] - Task's boardId
   * @param {?string} [task.columnId] - Task's columnId
   */
  constructor({
    id = uuid(),
    title = 'TASK',
    order = null,
    description = 'TASK DESCRIPTION',
    userId = null,
    boardId = null,
    columnId = null,
  } = {}) {
    /**
     * @property {string} id - Task's id
     */
    this.id = id;
    /**
     * @property {string} title - Task's title
     */
    this.title = title;
    /**
     * @property {?number} order - Task's order
     */
    this.order = order;
    /**
     * @property {string} description - Task's description
     */
    this.description = description;
    /**
     * @property {?string} userId - Task's userId
     */
    this.userId = userId;
    /**
     * @property {?string} boardId - Task's boardId
     */
    this.boardId = boardId;
    /**
     * @property {?string} columnId - Task's columnId
     */
    this.columnId = columnId;
  }
}

module.exports = Task;
