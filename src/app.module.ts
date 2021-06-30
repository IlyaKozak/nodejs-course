import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import ormconfig from './db/ormconfig';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormconfig),
    HomeModule,
    UsersModule,
    TasksModule,
    BoardsModule,
  ],
  controllers: [],
})
export class AppModule {}
