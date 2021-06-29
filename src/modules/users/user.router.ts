import express, { Request, Response, NextFunction } from 'express';

import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { User } from './user.model';
import * as usersService from './user.service';
import ValidationError from '../../utils/validationError';
import HTTPError from '../../utils/HTTPError';

const router = express.Router();

router
  .route('/')
  .get(async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await usersService.readAll();
      res.json(users.map(User.toResponse));
    } catch (error) {
      next(error);
    }
  });

router
  .route('/:id')
  .get(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!id) {
        throw new ValidationError();
      }

      const user = await usersService.readById(id);
      if (!user) {
        throw new HTTPError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
      }
      res.json(User.toResponse(user));
    } catch (error) {
      next(error);
    }
  });

router
  .route('/')
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userToCreate = new User(req.body);
      const user = await usersService.create(userToCreate);

      res.status(StatusCodes.CREATED).json(User.toResponse(user));
    } catch (error) {
      next(error);
    }
  });

router
  .route('/:id')
  .put(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!id) {
        throw new ValidationError();
      }

      const user = await usersService.readById(id);

      const userUpdate: User = new User({
        ...user,
        ...req.body,
        id,
      });
      const result = await usersService.updateById(id, userUpdate);

      if (!result.affected) {
        throw new HTTPError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
      }
      res.json(User.toResponse(userUpdate));
    } catch (error) {
      next(error);
    }
  });

router
  .route('/:id')
  .delete(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      if (!id) {
        throw new ValidationError();
      }

      const result = await usersService.deleteById(id);

      if (!result.affected) {
        throw new HTTPError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
      }
      res.sendStatus(StatusCodes.OK);
    } catch (error) {
      next(error);
    }
  });

export default router;
