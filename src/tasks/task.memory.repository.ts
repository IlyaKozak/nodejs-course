import { DeleteResult, getRepository } from 'typeorm';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task as TaskEntity } from './entities/task.entity';
import { Task } from './task.model';

const create = async (entity: CreateTaskDto): Promise<any> => {
  const newTask = new Task(entity as any);
  return getRepository(TaskEntity).save(newTask as any);
};

const readAll = async (): Promise<Task[]> => getRepository(TaskEntity).find();

const readById = async (id: string): Promise<Task | undefined> =>
  getRepository(TaskEntity).findOne({ where: { id } });

const updateById = async (
  id: string,
  entityToUpdate: UpdateTaskDto,
): Promise<any> => {
  return getRepository(TaskEntity).update(id, entityToUpdate as any);
};

const deleteById = async (id: string): Promise<DeleteResult> =>
  getRepository(TaskEntity).delete(id);

export { create, readAll, readById, updateById, deleteById };
