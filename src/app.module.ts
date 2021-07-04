import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HomeModule } from './resources/home/home.module';
import { UsersModule } from './resources/users/users.module';
import { TasksModule } from './resources/tasks/tasks.module';
import { BoardsModule } from './resources/boards/boards.module';
import { LoginModule } from './resources/login/login.module';
import { LoggerModule } from './logger/logger.module';
import { RequestInfoMiddleware } from './middlewares/request-info.middleware';
import { User } from './resources/users/entities/user.entity';
import { Board } from './resources/boards/entities/board.entity';
import { Task } from './resources/tasks/entities/task.entity';
import { Column } from './resources/boards/entities/column.entity';
import { CreateTables1624013666751 } from './database/migrations/createTables';
import { InsertAdmin1624196113786 } from './database/migrations/insertAdmin';
import {
  POSTGRES_DATABASE_DEFAULT,
  POSTGRES_PASSWORD_DEFAULT,
  POSTGRES_PORT_DEFAULT,
  POSTGRES_USERNAME_DEFAULT,
} from './common/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST', 'localhost'),
        port: configService.get('POSTGRES_PORT', POSTGRES_PORT_DEFAULT),
        username: configService.get('POSTGRES_USER', POSTGRES_USERNAME_DEFAULT),
        password: configService.get(
          'POSTGRES_PASSWORD',
          POSTGRES_PASSWORD_DEFAULT,
        ),
        database: configService.get('POSTGRES_DB', POSTGRES_DATABASE_DEFAULT),
        synchronize: false,
        logging: false,
        entities: [User, Board, Task, Column],
        migrations: [CreateTables1624013666751, InsertAdmin1624196113786],
        migrationsRun: true,
      }),
    }),
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
