import express, { Request, Response, NextFunction } from 'express';

import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import { Task, ITask } from './task.model';
import * as tasksService from './task.service';

const router = express.Router({ mergeParams: true });

router.route('/').get(async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await tasksService.readAll();
    res.json(tasks);
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
    const task = await tasksService.readById(id);
    return res.status(task ? StatusCodes.OK : StatusCodes.NOT_FOUND).json(task);
  } catch (error) {
    return next(error);
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { boardId } = req.params;
    const taskToCreate = new Task({
      ...req.body,
      boardId,
    });

    const task = await tasksService.create(taskToCreate);

    res.status(StatusCodes.CREATED).json(task);
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
    const taskUpdate: ITask = req.body;
    const task = await tasksService.updateById(id, taskUpdate);
    return res.json(task);
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
    const task = await tasksService.deleteById(id);
    return res.sendStatus(task ? StatusCodes.OK : StatusCodes.NOT_FOUND);
  } catch (error) {
    return next(error);
  }
});

export default router;
