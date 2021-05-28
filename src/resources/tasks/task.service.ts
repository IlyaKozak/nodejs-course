import * as tasksRepo from './task.memory.repository';
import { ITask } from './task.model';

const create = (task: ITask) => tasksRepo.create(task);
const readAll = () => tasksRepo.readAll();
const readById = (id: string) => tasksRepo.readById(id);
const updateById = (id: string, taskUpdate: ITask) => tasksRepo.updateById(id, taskUpdate);
const deleteById = (id: string) => tasksRepo.deleteById(id);

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
