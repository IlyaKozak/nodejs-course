// import express, { Request, Response, NextFunction } from 'express';

// import { StatusCodes, ReasonPhrases } from 'http-status-codes';

// import { Task, ITask } from './task.model';
// import * as tasksService from './task.service';
// import ValidationError from '../../../src/utils/validationError';
// import HTTPError from '../../../src/utils/HTTPError';

// const router = express.Router({ mergeParams: true });

// router
//   .route('/')
//   .get(async (_req: Request, res: Response, next: NextFunction) => {
//     try {
//       const tasks = await tasksService.readAll();
//       res.json(tasks);
//     } catch (error) {
//       next(error);
//     }
//   });

// router
//   .route('/:id')
//   .get(async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { id } = req.params;
//       if (!id) {
//         throw new ValidationError();
//       }

//       const task = await tasksService.readById(id);
//       if (!task) {
//         throw new HTTPError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
//       }
//       res.json(task);
//     } catch (error) {
//       next(error);
//     }
//   });

// router
//   .route('/')
//   .post(async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { boardId } = req.params;
//       const taskToCreate = new Task({
//         ...req.body,
//         boardId,
//       });

//       const task = await tasksService.create(taskToCreate);

//       res.status(StatusCodes.CREATED).json(task);
//     } catch (error) {
//       next(error);
//     }
//   });

// router
//   .route('/:id')
//   .put(async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { id } = req.params;
//       if (!id) {
//         throw new ValidationError();
//       }

//       const taskUpdate: ITask = req.body;
//       const task = await tasksService.updateById(id, taskUpdate);
//       if (!task) {
//         throw new HTTPError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
//       }
//       res.json(task);
//     } catch (error) {
//       next(error);
//     }
//   });

// router
//   .route('/:id')
//   .delete(async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { id } = req.params;
//       if (!id) {
//         throw new ValidationError();
//       }

//       const task = await tasksService.deleteById(id);
//       if (!task) {
//         throw new HTTPError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
//       }
//       res.sendStatus(StatusCodes.OK);
//     } catch (error) {
//       next(error);
//     }
//   });

// export default router;
