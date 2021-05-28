import { DBMS as db, Entity } from '../../db/in-memory-db';
import TABLE from '../../common/constants';
import { ITask } from './task.model';
import { IUser } from '../users/user.model';
import { IBoard } from '../boards/board.model';

const { TASKS } = TABLE;

const create = async (entity: ITask): Promise<Entity> => {
  return db.postEntity(TASKS, entity);
};

const readAll = async (): Promise<IUser[] | IBoard[] | ITask[]> => {
  return db.getAllEntities(TASKS);
};

const readById = async (id: string): Promise<ITask | IUser | IBoard | undefined> => {
  return db.getEntityById(TASKS, id);
};

const updateById = async (id: string, entityToUpdate: ITask): Promise<ITask | IUser | IBoard | undefined> => {
  return db.putEntity(TASKS, id, entityToUpdate);
};

const deleteById = async (id: string): Promise<Entity | undefined> => {
  return db.deleteEntity(TASKS, id);
};

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
