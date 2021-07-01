import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Task } from '../tasks/entities/task.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepo: Repository<User>,
    @InjectRepository(Task) private readonly tasksRepo: Repository<Task>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepo.create(createUserDto);

    return this.usersRepo.save(newUser);
  }

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: string) {
    return this.usersRepo.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepo.update(id, updateUserDto);
  }

  async remove(id: string) {
    const userToRemove = await this.findOne(id);

    if (!userToRemove) {
      return {
        message: 'No such user',
      };
    }

    await this.tasksRepo.update({ userId: id }, { userId: undefined });
    return this.usersRepo.remove(userToRemove);
  }
}
