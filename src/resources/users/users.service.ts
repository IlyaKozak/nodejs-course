import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findOne(id: string) {
    try {
      const user = await this.usersRepo.findOneOrFail(id);
      return user;
    } catch {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepo.update(id, updateUserDto);
  }

  async remove(id: string) {
    await this.tasksRepo.update({ userId: id }, { userId: undefined });
    return this.usersRepo.delete(id);
  }
}
