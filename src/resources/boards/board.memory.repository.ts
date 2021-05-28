import { DBMS as db, Entity } from '../../db/in-memory-db';
import TABLE from '../../common/constants';
import { IBoard } from './board.model';
import { IUser } from '../users/user.model';
import { ITask } from '../tasks/task.model';

const { BOARDS } = TABLE;

const create = async (entity: IBoard): Promise<Entity> => {
  return db.postEntity(BOARDS, entity);
};

const readAll = async (): Promise<IUser[] | IBoard[] | ITask[]> => {
  return db.getAllEntities(BOARDS);
};

const readById = async (id: string): Promise<IBoard | IUser | ITask | undefined> => {
  return db.getEntityById(BOARDS, id);
};

const updateById = async (id: string, entityToUpdate: IBoard): Promise<IBoard | IUser | ITask | undefined> => {
  return db.putEntity(BOARDS, id, entityToUpdate);
};

const deleteById = async (id: string): Promise<Entity | undefined> => {
  return db.deleteEntity(BOARDS, id);
};

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
