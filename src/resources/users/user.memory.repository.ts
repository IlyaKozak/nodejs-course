import { DBMS as db } from '../../db/in-memory-db';
import TABLE from '../../common/constants';
import { IUser } from './user.model';

const { USERS } = TABLE;

const create = async (entity: IUser) => db.postEntity(USERS, entity);
const readAll = async () => db.getAllEntities(USERS);
const readById = async (id: string) => db.getEntityById(USERS, id);
const updateById = async (id: string, entityToUpdate: IUser) => db.putEntity(USERS, id, entityToUpdate);
const deleteById = async (id: string) => db.deleteEntity(USERS, id);

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
