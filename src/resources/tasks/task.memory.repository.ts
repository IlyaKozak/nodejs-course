import { DBMS as db } from '../../db/in-memory-db';
import TABLE from '../../common/constants';
import { ITask } from './task.model';

const { TASKS } = TABLE;

const create = async (entity: ITask): Promise<ITask> => {
  return db.postEntity(TASKS, entity) as ITask;
};

const readAll = async (): Promise<ITask[]> => {
  return db.getAllEntities(TASKS) as ITask[];
};

const readById = async (id: string): Promise<ITask | undefined> => {
  return db.getEntityById(TASKS, id) as (ITask | undefined);
};

const updateById = async (id: string, entityToUpdate: ITask): Promise<ITask | undefined> => {
  return db.putEntity(TASKS, id, entityToUpdate) as (ITask | undefined);
};

const deleteById = async (id: string): Promise<ITask | undefined> => {
  return db.deleteEntity(TASKS, id) as (ITask | undefined);
};

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
