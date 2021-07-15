import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import yaml from 'yamljs';

import { AppModule } from './app.module';
import {
  APP_PLATFORM_DEFAULT,
  APP_PLATFORM_FASTIFY,
  PORT_DEFAULT,
  HOSTNAME_DEFAULT,
} from './common/constants';
import { AllExceptionFilter } from './filters/all-exception.filter';
import { AuthGuard } from './guards/auth.guard';
import { Logger } from './logger/logger.service';
import { RequestLoggerInterceptor } from './interceptors/request-logger.interceptor';

async function bootstrap() {
  const platform = process.env['USE_FASTIFY'];

  let app;
  switch (platform) {
    case APP_PLATFORM_FASTIFY:
      app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
      );
      break;
    case APP_PLATFORM_DEFAULT:
    default:
      app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: ['log', 'error', 'warn', 'debug', 'verbose'],
      });
      break;
  }

  const logger = app.get(Logger);
  app.useLogger(logger);
  logger.log(`Platform: ${platform?.toUpperCase()}`);

  process.on('uncaughtException', async (error: Error) => {
    await logger.error(error.message);
  });

  process.on('unhandledRejection', async (reason: Error) => {
    await logger.error(reason.message);
  });

  const configService: ConfigService = app.get(ConfigService);

  const swaggerDocument = yaml.load(join(__dirname, '..', 'doc', 'api.yaml'));
  SwaggerModule.setup('doc', app, swaggerDocument);

  app.useGlobalGuards(new AuthGuard());
  app.useGlobalFilters(new AllExceptionFilter(logger));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new RequestLoggerInterceptor(logger));

  await app.listen(configService.get('PORT') || PORT_DEFAULT, HOSTNAME_DEFAULT);
}

bootstrap();
