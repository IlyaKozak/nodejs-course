import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import ormconfig from './database/ormconfig';
import { HomeModule } from './resources/home/home.module';
import { UsersModule } from './resources/users/users.module';
import { TasksModule } from './resources/tasks/tasks.module';
import { BoardsModule } from './resources/boards/boards.module';
import { LoginModule } from './resources/login/login.module';
import { LoggerModule } from './logger/logger.module';
import { RequestInfoMiddleware } from './middlewares/request-info.middleware';

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
    LoginModule,
    LoggerModule,
  ],
  controllers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestInfoMiddleware).forRoutes('*');
  }
}
