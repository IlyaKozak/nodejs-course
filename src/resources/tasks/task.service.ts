import * as tasksRepo from './task.memory.repository';
import { Entity } from '../../db/in-memory-db';
import { ITask } from './task.model';
import { IUser } from '../users/user.model';
import { IBoard } from '../boards/board.model';

const create = (task: ITask): Promise<Entity> => {
  return tasksRepo.create(task);
};

const readAll = (): Promise<IUser[] | IBoard[] | ITask[]> => {
  return tasksRepo.readAll();
};

const readById = (id: string): Promise<ITask | IUser | IBoard | undefined> => {
  return tasksRepo.readById(id);
};

const updateById = (id: string, taskUpdate: ITask): Promise<ITask | IUser | IBoard | undefined> => {
  return tasksRepo.updateById(id, taskUpdate);
};

const deleteById = (id: string): Promise<Entity | undefined> => {
  return tasksRepo.deleteById(id);
};

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
