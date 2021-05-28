import * as boardsRepo from './board.memory.repository';
import { Entity } from '../../db/in-memory-db';
import { IBoard } from './board.model';
import { IUser } from '../users/user.model';
import { ITask } from '../tasks/task.model';

const create = (board: IBoard): Promise<Entity> => {
  return boardsRepo.create(board);
};

const readAll = (): Promise<IUser[] | IBoard[] | ITask[]> => {
  return boardsRepo.readAll();
};

const readById = (id: string): Promise<IBoard | IUser | ITask | undefined> => {
  return boardsRepo.readById(id);
};

const updateById = (id: string, boardUpdate: IBoard): Promise<IBoard | IUser | ITask | undefined> => {
  return boardsRepo.updateById(id, boardUpdate);
};

const deleteById = (id: string): Promise<Entity | undefined> => {
  return boardsRepo.deleteById(id);
};

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
