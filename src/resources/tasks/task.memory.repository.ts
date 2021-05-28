import { DBMS as db } from '../../db/in-memory-db';
import TABLE from '../../common/constants';
import { ITask } from './task.model';

const { TASKS } = TABLE;

const create = async (entity: ITask) => db.postEntity(TASKS, entity);
const readAll = async () => db.getAllEntities(TASKS);
const readById = async (id: string) => db.getEntityById(TASKS, id);
const updateById = async (id: string, entityToUpdate: ITask) => db.putEntity(TASKS, id, entityToUpdate);
const deleteById = async (id: string) => db.deleteEntity(TASKS, id);

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
