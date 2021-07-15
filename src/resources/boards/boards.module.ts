import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { Board } from './entities/board.entity';
import { Task } from '../tasks/entities/task.entity';
import { Column } from './entities/column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board, Task, Column])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
