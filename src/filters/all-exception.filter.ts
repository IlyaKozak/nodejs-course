import {
  ExceptionFilter,
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(
    exception: BadRequestException | HttpException | unknown,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let validationResponse = {};
    if (exception instanceof BadRequestException) {
      validationResponse = exception.getResponse();
    }

    response.status(status).json({
      ...validationResponse,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
