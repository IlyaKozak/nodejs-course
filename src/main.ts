import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { DEFAULT_PORT } from './common/constants';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(configService.get('PORT') || DEFAULT_PORT);
}

bootstrap();
