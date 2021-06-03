import express, { Request, Response, NextFunction } from 'express';

import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import { User, IUser } from './user.model';
import * as usersService from './user.service';

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
  const { id } = req.params;
  if (!id) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(ReasonPhrases.BAD_REQUEST);
  }

  try {
    const user = await usersService.readById(id);
    return res.json(user ? User.toResponse(user) : {});
  } catch (error) {
    return next(error);
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
  const { id } = req.params;
  if (!id) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(ReasonPhrases.BAD_REQUEST);
  }

  try {
    const userUpdate: IUser = req.body;
    const user = await usersService.updateById(id, userUpdate);
    return res.json(user ? User.toResponse(user) : user);
  } catch (error) {
    return next(error);
  }
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(ReasonPhrases.BAD_REQUEST);
  }

  try {
    const result = await usersService.deleteById(id);
    return res.sendStatus(result ? StatusCodes.OK : StatusCodes.NOT_FOUND);
  } catch (error) {
    return next(error);
  }
});

export default router;
