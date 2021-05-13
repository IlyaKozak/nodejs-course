const db = require('../../db/in-memory-db');

const TASKS = 'TASKS';

const create = async (entity) => db.postEntity(TASKS, entity);
const readAll = async () => db.getAllEntities(TASKS);
const readById = async (id) => db.getEntityById(TASKS, id);
const updateById = async (id, entityToUpdate) => db.putEntity(TASKS, id, entityToUpdate);
const deleteById = async (id) => db.deleteEntity(TASKS, id);

module.exports = { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
