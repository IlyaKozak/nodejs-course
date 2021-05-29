import * as boardsRepo from './board.memory.repository';
import { IBoard } from './board.model';

const create = (board: IBoard): Promise<IBoard> => {
  return boardsRepo.create(board);
};

const readAll = (): Promise<IBoard[]> => {
  return boardsRepo.readAll();
};

const readById = (id: string): Promise<IBoard | undefined> => {
  return boardsRepo.readById(id);
};

const updateById = (id: string, boardUpdate: IBoard): Promise<IBoard | undefined> => {
  return boardsRepo.updateById(id, boardUpdate);
};

const deleteById = (id: string): Promise<IBoard | undefined> => {
  return boardsRepo.deleteById(id);
};

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
