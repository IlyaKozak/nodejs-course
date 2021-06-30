import { Injectable } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import * as tasksRepo from './task.memory.repository';

@Injectable()
export class TasksService {
  create(createTaskDto: CreateTaskDto) {
    return tasksRepo.create(createTaskDto);
  }

  findAll() {
    return tasksRepo.readAll();
  }

  findOne(id: string) {
    return tasksRepo.readById(id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return tasksRepo.updateById(id, updateTaskDto);
  }

  remove(id: string) {
    return tasksRepo.deleteById(id);
  }
}
