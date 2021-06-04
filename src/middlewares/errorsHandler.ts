import { Request, Response } from 'express';

import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import logger from '../utils/logger';
import ValidationError from '../utils/validationError';
import HTTPError from '../utils/HTTPError';

const errorHandler = (err: Error, _req: Request, res: Response): void => {
  const timeStamp = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  if (err instanceof ValidationError || err instanceof HTTPError) {
    logger.error(`[${timeStamp}] ${err.constructor.name}: ${err.status} - ${err.text}\n`);
    res
      .status(err.status)
      .send(err.text);
  } else {
    logger.error(`[${timeStamp}] ${err.name}: ${err.message}\n`);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

export default errorHandler;
