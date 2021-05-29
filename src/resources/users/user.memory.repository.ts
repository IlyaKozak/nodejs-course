import { DBMS as db } from '../../db/in-memory-db';
import TABLE from '../../common/constants';
import { IUser } from './user.model';

const { USERS } = TABLE;

const create = async (entity: IUser): Promise<IUser> => {
  return db.postEntity(USERS, entity) as IUser;
};

const readAll = async (): Promise<IUser[]> => {
  return db.getAllEntities(USERS) as IUser[];
};

const readById = async (id: string): Promise<IUser | undefined> => {
  return db.getEntityById(USERS, id) as (IUser | undefined);
};

const updateById = async (id: string, entityToUpdate: IUser): Promise<IUser | undefined> => {
  return db.putEntity(USERS, id, entityToUpdate) as (IUser | undefined);
};

const deleteById = async (id: string): Promise<IUser | undefined> => {
  return db.deleteEntity(USERS, id) as (IUser | undefined);
};

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
