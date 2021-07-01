import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ExpressAdapter } from '@nestjs/platform-express';
import { FastifyAdapter } from '@nestjs/platform-fastify';

import './utils/uncaughtErrorsHandling';
import { AppModule } from './app.module';
import { DEFAULT_APP_PLATFORM, DEFAULT_PORT } from './common/constants';
import { AllExceptionFilter } from './filters/all-exception.filter';
import { AuthGuard } from './guards/auth.guard';

async function bootstrap() {
  const platform = process.env['USE_FASTIFY'];

  const app = await NestFactory.create(
    AppModule,
    platform === DEFAULT_APP_PLATFORM
      ? new ExpressAdapter()
      : new FastifyAdapter(),
  );

  console.log('Adapter:', app.getHttpAdapter().constructor.name);

  const configService: ConfigService = app.get(ConfigService);

  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalGuards(new AuthGuard());

  await app.listen(configService.get('PORT') || DEFAULT_PORT);
}

bootstrap();
