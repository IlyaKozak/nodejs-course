import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { DEFAULT_PORT } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);

  await app.listen(configService.get('PORT') || DEFAULT_PORT);
}

bootstrap();
