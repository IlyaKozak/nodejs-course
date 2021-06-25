import express, { Request, Response, NextFunction } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import HTTPError from '../../utils/HTTPError';
import * as loginService from './login.service';

const router = express.Router();

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { login, password } = req.body;

    const token = await loginService.signToken(login, password);

    if (!token) {
      throw new HTTPError(StatusCodes.FORBIDDEN, ReasonPhrases.FORBIDDEN);
    }

    res.json({ token });
  } catch (error) {
    next(error);
  }
});

export default router;
