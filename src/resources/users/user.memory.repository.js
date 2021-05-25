const db = require('../../db/in-memory-db');
const TABLE = require('../../common/constants');

const { USERS } = TABLE;

const create = async (entity) => db.postEntity(USERS, entity);
const readAll = async () => db.getAllEntities(USERS);
const readById = async (id) => db.getEntityById(USERS, id);
const updateById = async (id, entityToUpdate) => db.putEntity(USERS, id, entityToUpdate);
const deleteById = async (id) => db.deleteEntity(USERS, id);

module.exports = { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
