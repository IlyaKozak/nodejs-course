import { NextFunction, Request, Response } from 'express';

const auth = (_req: Request, _res: Response, next: NextFunction) => {
  next();
};

export default auth;
