const usersRepo = require('./user.memory.repository');

const create = (user) => usersRepo.create(user);
const readAll = () => usersRepo.readAll();
const readById = (id) => usersRepo.readById(id);
const updateById = (id, userUpdate) => usersRepo.updateById(id, userUpdate);
const deleteById = (id) => usersRepo.deleteById(id);

module.exports = { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
