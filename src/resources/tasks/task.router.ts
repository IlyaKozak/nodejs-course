import express, { Request, Response } from 'express';

import STATUS_CODE from '../../common/http-status-codes';
import { Task, ITask } from './task.model';
import * as tasksService from './task.service';

const router = express.Router({ mergeParams: true });

router.route('/').get(async (_req: Request, res: Response) => {
  const tasks = await tasksService.readAll();
  res.json(tasks);
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(STATUS_CODE.NOT_FOUND);

  const task = await tasksService.readById(id);
  return res.status(task ? STATUS_CODE.OK : STATUS_CODE.NOT_FOUND).json(task);
});

router.route('/').post(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const taskToCreate = new Task({
    ...req.body,
    boardId,
  });
  const task = await tasksService.create(taskToCreate);
  res.status(STATUS_CODE.CREATED).json(task);
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(STATUS_CODE.NOT_FOUND);

  const taskUpdate: ITask = req.body;
  const task = await tasksService.updateById(id, taskUpdate);
  return res.json(task);
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(STATUS_CODE.NOT_FOUND);

  const task = await tasksService.deleteById(id);
  return res.sendStatus(task ? STATUS_CODE.OK : STATUS_CODE.NOT_FOUND);
});

export default router;