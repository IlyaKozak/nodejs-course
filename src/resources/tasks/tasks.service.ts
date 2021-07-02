import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private readonly tasksRepo: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    const newTask = this.tasksRepo.create(createTaskDto);
    return this.tasksRepo.save(newTask);
  }

  findAll() {
    return this.tasksRepo.find();
  }

  findOne(id: string) {
    return this.tasksRepo.findOne(id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.tasksRepo.update(id, updateTaskDto);
  }

  remove(boardId: string, id: string) {
    return this.tasksRepo.delete({ boardId, id });
  }
}
