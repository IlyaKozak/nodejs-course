import * as boardsRepo from './board.memory.repository';
import { IBoard } from './board.model';

const create = (board: IBoard): Promise<IBoard> => boardsRepo.create(board);

const readAll = (): Promise<IBoard[]> => boardsRepo.readAll();

const readById = (id: string): Promise<IBoard | undefined> => boardsRepo.readById(id);

const updateById = (id: string, boardUpdate: IBoard): Promise<IBoard | undefined> => (
  boardsRepo.updateById(id, boardUpdate)
);

const deleteById = (id: string): Promise<IBoard | undefined> => boardsRepo.deleteById(id);

export {
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
