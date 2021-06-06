import * as usersRepo from './user.memory.repository';
import { IUser } from './user.model';

const create = (user: IUser): Promise<IUser> => usersRepo.create(user);

const readAll = (): Promise<IUser[]> => usersRepo.readAll();

const readById = (id: string): Promise<IUser | undefined> => usersRepo.readById(id);

const updateById = (id: string, userUpdate: IUser): Promise<IUser | undefined> => (
  usersRepo.updateById(id, userUpdate)
);

const deleteById = (id: string): Promise<IUser | undefined> => usersRepo.deleteById(id);

export {
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
