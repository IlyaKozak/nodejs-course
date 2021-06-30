import { NextFunction, Request, Response } from 'express';

import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import logger from '../../src/utils/logger';
import ValidationError from '../../src/utils/validationError';
import HTTPError from '../../src/utils/HTTPError';

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const timeStamp = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  if (err instanceof ValidationError || err instanceof HTTPError) {
    logger.error(
      `[${timeStamp}] ${err.constructor.name}: ${err.status} - ${err.text}\n`,
    );

    res.status(err.status).json({
      status: err.status,
      message: err.text,
    });
  } else {
    logger.error(`[${timeStamp}] ${err.name}: ${err.message}\n`);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: ReasonPhrases.INTERNAL_SERVER_ERROR,
      message: err.message,
    });
  }
};

export default errorHandler;