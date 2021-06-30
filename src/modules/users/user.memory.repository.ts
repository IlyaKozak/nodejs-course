import { DeleteResult, getRepository, UpdateResult } from 'typeorm';

import { User } from 'src/users/entities/user.entity';
import { Task } from '../../db/entities';
import { IUser } from './user.model';

const create = async (entity: IUser): Promise<IUser> =>
  getRepository(User).save(entity);

const readAll = async (): Promise<IUser[]> => getRepository(User).find();

const readById = async (id: string): Promise<IUser | undefined> =>
  getRepository(User).findOne({ where: { id } });

const updateById = async (
  id: string,
  entityToUpdate: IUser,
): Promise<UpdateResult> => getRepository(User).update(id, entityToUpdate);

const deleteById = async (id: string): Promise<DeleteResult> => {
  await getRepository(Task).update({ userId: id }, { userId: undefined });
  return getRepository(User).delete(id);
};

export { create, readAll, readById, updateById, deleteById };
