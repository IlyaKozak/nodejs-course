import { Injectable, NestMiddleware } from '@nestjs/common';
import { finished } from 'stream';
import { Request, Response, NextFunction } from 'express';

import { Logger } from 'src/logger/logger.service';

@Injectable()
export class RequestInfoMiddleware implements NestMiddleware {
  constructor(private logger: Logger) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, url, body } = req;
    const start = Date.now();

    next();

    finished(res, () => {
      const ms = Date.now() - start;

      const { statusCode } = res;
      this.logger.log(
        `${method} ${url} ${statusCode} ${ms}ms ${JSON.stringify(body || {})}`,
      );
    });
  }
}
