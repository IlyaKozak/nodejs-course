import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { SwaggerModule } from '@nestjs/swagger';

import './utils/uncaughtErrorsHandling';
import { AppModule } from './app.module';
import {
  APP_PLATFORM_DEFAULT,
  APP_PLATFORM_FASTIFY,
  PORT_DEFAULT,
} from './common/constants';
import { AllExceptionFilter } from './filters/all-exception.filter';
import { AuthGuard } from './guards/auth.guard';

import yaml from 'yamljs';
import { join } from 'path';

async function bootstrap() {
  const platform = process.env['USE_FASTIFY'];

  let app;
  switch (platform) {
    case APP_PLATFORM_FASTIFY:
      app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({ logger: true }),
      );
      break;
    case APP_PLATFORM_DEFAULT:
    default:
      app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: ['log', 'error', 'warn', 'debug', 'verbose'],
      });
      break;
  }

  console.log('Platform:', app.getHttpAdapter().constructor.name);

  const configService: ConfigService = app.get(ConfigService);

  const swaggerDocument = yaml.load(
    join(__dirname, '..', '..', 'doc', 'api.yaml'),
  );
  SwaggerModule.setup('doc', app, swaggerDocument);

  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalGuards(new AuthGuard());

  await app.listen(configService.get('PORT') || PORT_DEFAULT);
}

bootstrap();
