import * as usersRepo from './user.memory.repository';
import { IUser } from './user.model';

const create = (user: IUser): Promise<IUser> => {
  return usersRepo.create(user);
};

const readAll = (): Promise<IUser[]> => {
  return usersRepo.readAll();
};

const readById = (id: string): Promise<IUser | undefined> => {
  return usersRepo.readById(id);
};

const updateById = (id: string, userUpdate: IUser): Promise<IUser | undefined> => {
  return usersRepo.updateById(id, userUpdate);
};

const deleteById = (id: string): Promise<IUser | undefined> => {
  return usersRepo.deleteById(id);
};

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
