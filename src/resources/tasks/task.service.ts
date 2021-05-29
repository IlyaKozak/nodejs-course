import * as tasksRepo from './task.memory.repository';
import { ITask } from './task.model';

const create = (task: ITask): Promise<ITask> => {
  return tasksRepo.create(task);
};

const readAll = (): Promise<ITask[]> => {
  return tasksRepo.readAll();
};

const readById = (id: string): Promise<ITask | undefined> => {
  return tasksRepo.readById(id);
};

const updateById = (id: string, taskUpdate: ITask): Promise<ITask | undefined> => {
  return tasksRepo.updateById(id, taskUpdate);
};

const deleteById = (id: string): Promise<ITask | undefined> => {
  return tasksRepo.deleteById(id);
};

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
