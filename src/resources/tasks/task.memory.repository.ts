import { DeleteResult, getRepository, UpdateResult } from 'typeorm';

import { Task } from '../../db/entities';
import { ITask } from './task.model';

const create = async (entity: ITask): Promise<ITask> => (
  getRepository(Task).save(entity as Task)
);

const readAll = async (): Promise<ITask[]> => (
  getRepository(Task).find()
);

const readById = async (id: string): Promise<ITask | undefined> => (
  getRepository(Task).findOne({ where: { id } })
);

const updateById = async (id: string, entityToUpdate: ITask): Promise<UpdateResult> => (
  getRepository(Task).update(id, entityToUpdate as Task)
);

const deleteById = async (id: string): Promise<DeleteResult> => (
  getRepository(Task).delete(id)
);

export {
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
