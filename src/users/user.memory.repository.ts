import { DeleteResult, getRepository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User as UserEntity } from './entities/user.entity';
import { User } from './user.model';

const create = async (entity: CreateUserDto): Promise<UpdateUserDto> => {
  const newUser = new User(entity);
  await getRepository(UserEntity).save(newUser);
  return User.toResponse(newUser);
};

const readAll = async (): Promise<User[]> => getRepository(UserEntity).find();

const readById = async (id: string): Promise<User | undefined> =>
  getRepository(UserEntity).findOne({ where: { id } });

const updateById = async (
  id: string,
  entityToUpdate: UpdateUserDto,
): Promise<UpdateUserDto> => {
  const user = await readById(id);
  const userUpdate: User = new User({
    ...user,
    ...entityToUpdate,
    id,
  });

  await getRepository(UserEntity).update(id, userUpdate);
  return User.toResponse(userUpdate);
};

const deleteById = async (id: string): Promise<DeleteResult> => {
  // await getRepository(Task).update({ userId: id }, { userId: undefined });
  return getRepository(UserEntity).delete(id);
};

export { create, readAll, readById, updateById, deleteById };
