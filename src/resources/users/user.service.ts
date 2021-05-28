import * as usersRepo from './user.memory.repository';
import { Entity } from '../../db/in-memory-db';
import { IUser } from './user.model';
import { IBoard } from '../boards/board.model';
import { ITask } from '../tasks/task.model';

const create = (user: IUser): Promise<Entity> => {
  return usersRepo.create(user);
};

const readAll = (): Promise<IUser[] | IBoard[] | ITask[]> => {
  return usersRepo.readAll();
};

const readById = (id: string): Promise<IUser | IBoard | ITask | undefined> => {
  return usersRepo.readById(id);
};

const updateById = (id: string, userUpdate: IUser): Promise<IUser | IBoard | ITask | undefined> => {
  return usersRepo.updateById(id, userUpdate);
};

const deleteById = (id: string): Promise<Entity | undefined> => {
  return usersRepo.deleteById(id);
};

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
