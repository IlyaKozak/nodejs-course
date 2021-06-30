import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as usersRepo from './user.memory.repository';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return usersRepo.create(createUserDto);
  }

  findAll() {
    return usersRepo.readAll();
  }

  findOne(id: string) {
    return usersRepo.readById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return usersRepo.updateById(id, updateUserDto);
  }

  remove(id: string) {
    return usersRepo.deleteById(id);
  }
}
