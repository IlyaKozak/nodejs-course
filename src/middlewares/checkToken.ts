import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import HTTPError from '../utils/HTTPError';
import { JWT_SECRET_KEY } from '../common/config';

const checkToken = (req: Request, _res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.header('Authorization');

    let token;
    if (authHeader && /^Bearer .*$/.test(authHeader)) {
      [,token] = authHeader.split(' ');
    }

    if (token && jwt.verify(token, JWT_SECRET_KEY as string)) {
      next();
      return;
    }

    throw new HTTPError(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED);
  } catch (error) {
    next(error);
  }
};

export default checkToken;
