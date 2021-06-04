import express, { Request, Response, NextFunction } from 'express';

import { StatusCodes } from 'http-status-codes';

import { Board, IBoard } from './board.model';
import * as boardsService from './board.service';
import ValidationError from '../../utils/validationError';

const router = express.Router();

router.route('/').get(async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const boards = await boardsService.readAll();
    res.json(boards);
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

    const board = await boardsService.readById(id);
    res.status(board ? StatusCodes.OK : StatusCodes.NOT_FOUND).json(board);
  } catch (error) {
    next(error);
  }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const boardToCreate = new Board(req.body);
    const board = await boardsService.create(boardToCreate);
    res.status(StatusCodes.CREATED).json(board);
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

    const boardUpdate: IBoard = req.body;
    const board = await boardsService.updateById(id, boardUpdate);
    res.json(board);
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

    const board = await boardsService.deleteById(id);
    res.sendStatus(board ? StatusCodes.OK : StatusCodes.NOT_FOUND);
  } catch (error) {
    next(error);
  }
});

export default router;
