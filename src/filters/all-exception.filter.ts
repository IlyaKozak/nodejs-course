import {
  ExceptionFilter,
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import {
  APP_PLATFORM_DEFAULT,
  APP_PLATFORM_FASTIFY,
} from 'src/common/constants';
import { Logger } from 'src/logger/logger.service';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  constructor(private logger: Logger) {}

  catch(exception: BadRequestException | HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const { method, url, body, query } = request;

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let validationResponse = {};
    if (exception instanceof BadRequestException) {
      validationResponse = exception.getResponse();
    }

    const apiResponse = {
      ...validationResponse,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    this.logger.log(
      `${method} ${url} ${status} Body: ${JSON.stringify(body || {})}` +
        ` Query: ${JSON.stringify(query || {})}`,
    );
    this.logger.error(JSON.stringify(exception));

    const platform = process.env['USE_FASTIFY'];
    switch (platform) {
      case APP_PLATFORM_FASTIFY:
        response?.code(status)?.send(apiResponse);
        break;
      case APP_PLATFORM_DEFAULT:
      default:
        response?.status(status)?.json(apiResponse);
        break;
    }
  }
}
