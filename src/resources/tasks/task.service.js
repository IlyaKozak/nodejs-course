const tasksRepo = require('./task.memory.repository');

const create = (task) => tasksRepo.create(task);
const readAll = () => tasksRepo.readAll();
const readById = (id) => tasksRepo.readById(id);
const updateById = (id, taskUpdate) => tasksRepo.updateById(id, taskUpdate);
const deleteById = (id) => tasksRepo.deleteById(id);

module.exports = { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
