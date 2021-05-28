import { DBMS as db, Entity } from '../../db/in-memory-db';
import TABLE from '../../common/constants';
import { IUser } from './user.model';
import { IBoard } from '../boards/board.model';
import { ITask } from '../tasks/task.model';

const { USERS } = TABLE;

const create = async (entity: IUser): Promise<Entity> => {
  return db.postEntity(USERS, entity);
};

const readAll = async (): Promise<IUser[] | IBoard[] | ITask[]> => {
  return db.getAllEntities(USERS);
};

const readById = async (id: string): Promise<IUser | IBoard | ITask | undefined> => {
  return db.getEntityById(USERS, id);
};

const updateById = async (id: string, entityToUpdate: IUser): Promise<IUser | IBoard | ITask | undefined> => {
  return db.putEntity(USERS, id, entityToUpdate);
};

const deleteById = async (id: string): Promise<Entity | undefined> => {
  return db.deleteEntity(USERS, id);
};

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
