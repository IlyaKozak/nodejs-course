const db = require('../../db/in-memory-db');

const BOARDS = 'BOARDS';

const create = async (entity) => db.postEntity(BOARDS, entity);
const readAll = async () => db.getAllEntities(BOARDS);
const readById = async (id) => db.getEntityById(BOARDS, id);
const updateById = async (id, entityToUpdate) => db.putEntity(BOARDS, id, entityToUpdate);
const deleteById = async (id) => db.deleteEntity(BOARDS, id);

module.exports = { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
