import express, { Request, Response, NextFunction } from 'express';

import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { Board, IBoard } from './board.model';
import * as boardsService from './board.service';
import ValidationError from '../../utils/validationError';
import HTTPError from '../../utils/HTTPError';

const router = express.Router();

router
  .route('/')
  .get(async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const boards = await boardsService.readAll();
      res.json(boards);
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

      const board = await boardsService.readById(id);
      if (!board) {
        throw new HTTPError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
      }

      // sort columns by order
      // if (board.columns) {
      //   board.columns.sort((columnA, columnB) => {
      //     if (columnA.order && columnB.order) {
      //       return columnA.order - columnB.order;
      //     }
      //     return 0;
      //   });
      // }

      res.json(board);
    } catch (error) {
      next(error);
    }
  });

router
  .route('/')
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const boardToCreate = new Board(req.body);
      const board = await boardsService.create(boardToCreate);
      res.status(StatusCodes.CREATED).json(board);
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

      const boardUpdate: IBoard = req.body;
      const board = await boardsService.updateById(id, boardUpdate);

      if (!board) {
        throw new HTTPError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
      }
      res.json(board);
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

      const result = await boardsService.deleteById(id);
      if (!result.affected) {
        throw new HTTPError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
      }
      res.sendStatus(StatusCodes.OK);
    } catch (error) {
      next(error);
    }
  });

export default router;
