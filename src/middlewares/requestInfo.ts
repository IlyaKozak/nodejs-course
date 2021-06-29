import { finished } from 'stream';

import { Request, Response, NextFunction } from 'express';

import logger from '../utils/logger';

const requestInfo = (req: Request, res: Response, next: NextFunction): void => {
  const { method, url, body, query } = req;
  const start = Date.now();

  next();

  finished(res, () => {
    const ms = Date.now() - start;
    const { statusCode } = res;

    const timeStamp = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    logger.info(
      `[${timeStamp}] ${method} ${url} ${statusCode} ${ms}ms ` +
        `${JSON.stringify(query)} ${JSON.stringify(body || {})}\n`,
    );
  });
};

export default requestInfo;
