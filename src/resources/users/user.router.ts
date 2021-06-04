import express, { Request, Response, NextFunction } from 'express';

import { StatusCodes } from 'http-status-codes';

import { User, IUser } from './user.model';
import * as usersService from './user.service';
import ValidationError from '../../utils/validationError';

const router = express.Router();

router.route('/').get(async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await usersService.readAll();
    res.json(users.map(User.toResponse));
  } catch (error) {
    next(error);
  }
});

router.route('/:id').get(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ValidationError();
    }

    const user = await usersService.readById(id);
    res.json(user ? User.toResponse(user) : {});
  } catch (error) {
    next(error);
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userToCreate = new User(req.body);
    const user = await usersService.create(userToCreate);

    res.status(StatusCodes.CREATED).json(User.toResponse(user));
  } catch (error) {
    next(error);
  }
});

router.route('/:id').put(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ValidationError();
    }

    const userUpdate: IUser = req.body;
    const user = await usersService.updateById(id, userUpdate);
    res.json(user ? User.toResponse(user) : user);
  } catch (error) {
    next(error);
  }
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ValidationError();
    }

    const result = await usersService.deleteById(id);
    res.sendStatus(result ? StatusCodes.OK : StatusCodes.NOT_FOUND);
  } catch (error) {
    next(error);
  }
});

export default router;
