const boardsRepo = require('./board.memory.repository');

const create = (board) => boardsRepo.create(board);
const readAll = () => boardsRepo.readAll();
const readById = (id) => boardsRepo.readById(id);
const updateById = (id, boardUpdate) => boardsRepo.updateById(id, boardUpdate);
const deleteById = (id) => boardsRepo.deleteById(id);

module.exports = { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
