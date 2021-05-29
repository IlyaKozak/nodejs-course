import * as tasksRepo from './task.memory.repository';
import { ITask } from './task.model';

const create = (task: ITask): Promise<ITask> => tasksRepo.create(task);

const readAll = (): Promise<ITask[]> => tasksRepo.readAll();

const readById = (id: string): Promise<ITask | undefined> => tasksRepo.readById(id);

const updateById = (id: string, taskUpdate: ITask): Promise<ITask | undefined> => (
  tasksRepo.updateById(id, taskUpdate)
);

const deleteById = (id: string): Promise<ITask | undefined> => tasksRepo.deleteById(id);

export {
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
