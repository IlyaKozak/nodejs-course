import * as boardsRepo from './board.memory.repository';

import { IBoard } from './board.model';

const create = (board: IBoard) => boardsRepo.create(board);
const readAll = () => boardsRepo.readAll();
const readById = (id: string) => boardsRepo.readById(id);
const updateById = (id: string, boardUpdate: IBoard) => boardsRepo.updateById(id, boardUpdate);
const deleteById = (id: string) => boardsRepo.deleteById(id);

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
