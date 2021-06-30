import { Injectable } from '@nestjs/common';

import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import * as boardsRepo from './board.memory.repository';

@Injectable()
export class BoardsService {
  create(createBoardDto: CreateBoardDto) {
    return boardsRepo.create(createBoardDto);
  }

  findAll() {
    return boardsRepo.readAll();
  }

  findOne(id: string) {
    return boardsRepo.readById(id);
  }

  update(id: string, updateBoardDto: UpdateBoardDto) {
    return boardsRepo.updateById(id, updateBoardDto);
  }

  remove(id: string) {
    return boardsRepo.deleteById(id);
  }
}
