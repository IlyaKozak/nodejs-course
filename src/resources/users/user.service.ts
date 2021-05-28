import * as usersRepo from './user.memory.repository';

import { IUser } from './user.model';

const create = (user: IUser) => usersRepo.create(user);
const readAll = () => usersRepo.readAll();
const readById = (id: string) => usersRepo.readById(id);
const updateById = (id: string, userUpdate: IUser) => usersRepo.updateById(id, userUpdate);
const deleteById = (id: string) => usersRepo.deleteById(id);

export { 
  create,
  readAll,
  readById,
  updateById,
  deleteById,
};
