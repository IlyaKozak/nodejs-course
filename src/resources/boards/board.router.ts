import express, { Request, Response } from 'express';

import { Board, IBoard } from './board.model';
import * as boardsService from './board.service';
import STATUS_CODE from '../../common/http-status-codes';

const router = express.Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const boards = await boardsService.readAll() as IBoard[];
  res.json(boards);
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.json({});

  const board = await boardsService.readById(id) as (IBoard | undefined);
  return res.status(board ? STATUS_CODE.OK : STATUS_CODE.NOT_FOUND).json(board);
});

router.route('/').post(async (req: Request, res: Response) => {
  const boardToCreate = new Board(req.body);
  const board = await boardsService.create(boardToCreate) as IBoard;
  res.status(STATUS_CODE.CREATED).json(board);
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.json({});

  const boardUpdate = req.body;
  const board = await boardsService.updateById(id, boardUpdate) as (IBoard | undefined);
  return res.json(board);
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.json({});

  const board = await boardsService.deleteById(id);
  return res.sendStatus(board ? STATUS_CODE.OK : STATUS_CODE.NOT_FOUND);
});

export default router;
