import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Task } from '../tasks/entities/task.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board) private readonly boardsRepo: Repository<Board>,
    @InjectRepository(Task) private readonly tasksRepo: Repository<Task>,
  ) {}

  create(createBoardDto: CreateBoardDto) {
    const newBoard = this.boardsRepo.create(createBoardDto);

    return this.boardsRepo.save(newBoard);
  }

  findAll() {
    return this.boardsRepo.find();
  }

  findOne(id: string) {
    return this.boardsRepo.findOne(id);
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    const boardToUpdate = await this.findOne(id);

    if (!boardToUpdate) {
      return;
    }

    if (updateBoardDto.title) {
      boardToUpdate.title = updateBoardDto.title;
    }

    // TODO: update columns if needed

    return this.boardsRepo.save(boardToUpdate);
  }

  async remove(id: string) {
    const boardToRemove = await this.findOne(id);

    if (!boardToRemove) {
      return;
    }

    await this.tasksRepo.delete({ boardId: id });

    return this.boardsRepo.remove(boardToRemove);
  }
}
