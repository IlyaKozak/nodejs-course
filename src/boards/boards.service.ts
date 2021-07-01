import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Task } from 'src/tasks/entities/task.entity';

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

  async findOne(id: string) {
    try {
      const board = await this.boardsRepo.findOneOrFail(id);
      return board;
    } catch {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    const boardToUpdate = await this.findOne(id);

    if (updateBoardDto.title) {
      boardToUpdate.title = updateBoardDto.title;
    }

    return this.boardsRepo.save(boardToUpdate);
  }

  async remove(id: string) {
    const boardToRemove = await this.findOne(id);

    await this.tasksRepo.delete({ boardId: id });

    return this.boardsRepo.remove(boardToRemove);
  }
}
