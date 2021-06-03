import { finished } from 'stream';

import { Request, Response, NextFunction } from 'express';

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const {
    method, url, body, query,
  } = req;
  const start = Date.now();

  next();

  finished(res, () => {
    const ms = Date.now() - start;
    const { statusCode } = res;

    // TODO: logging to file
    console.log(`${method} ${url} ${statusCode} ${ms}ms`);
    console.log(`Query params: ${JSON.stringify(query)}`);
    console.log(`Request body: ${JSON.stringify(body)}`);
  });
};

export default requestLogger;
