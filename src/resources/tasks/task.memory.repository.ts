import { DBMS as db } from '../../db/in-memory-db';
import TABLE from '../../common/constants';
import { ITask } from './task.model';

const { TASKS } = TABLE;

const create = async (entity: ITask): Promise<ITask> => db.postEntity(TASKS, entity) as ITask;

const readAll = async (): Promise<ITask[]> => db.getAllEntities(TASKS) as ITask[];

const readById = async (id: string): Promise<ITask | undefined> => (
  db.getEntityById(TASKS, id) as (ITask | undefined)
);

const updateById = async (id: string, entityToUpdate: ITask): Promise<ITask | undefined> => (
  db.putEntity(TASKS, id, entityToUpdate) as (ITask | undefined)
);

const deleteById = async (id: string): Promise<ITask | undefined> => (
  db.deleteEntity(TASKS, id) as (ITask | undefined)
);

export {
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
