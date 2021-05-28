import express, { Request, Response } from 'express';

import STATUS_CODE from '../../common/http-status-codes';
import { User, IUser } from './user.model';
import * as usersService from './user.service';

const router = express.Router();


router.route('/').get(async (_req: Request, res: Response) => {
  const users = await usersService.readAll() as IUser[];

  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.json({});

  const user = await usersService.readById(id) as (IUser | undefined);
  return res.json(user ? User.toResponse(user) : {});
});

router.route('/').post(async (req: Request, res: Response) => {
  const userToCreate = new User(req.body);
  const user = await usersService.create(userToCreate) as IUser;

  res.status(STATUS_CODE.CREATED).json(User.toResponse(user));
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.json({});  

  const userUpdate = req.body;
  const user = await usersService.updateById(id, userUpdate) as (IUser | undefined);

  return res.json(user ? User.toResponse(user) : user);
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.json({});

  const result = await usersService.deleteById(id);
  return res.sendStatus(result ? STATUS_CODE.OK : STATUS_CODE.NOT_FOUND);
});

export default router;
