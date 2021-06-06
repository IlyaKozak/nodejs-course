import express, { Request, Response } from 'express';

import { Board, IBoard } from './board.model';
import * as boardsService from './board.service';
import STATUS_CODE from '../../common/http-status-codes';

const router = express.Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const boards = await boardsService.readAll();
  res.json(boards);
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(STATUS_CODE.NOT_FOUND);

  const board = await boardsService.readById(id);
  return res.status(board ? STATUS_CODE.OK : STATUS_CODE.NOT_FOUND).json(board);
});

router.route('/').post(async (req: Request, res: Response) => {
  const boardToCreate = new Board(req.body);
  const board = await boardsService.create(boardToCreate);
  res.status(STATUS_CODE.CREATED).json(board);
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(STATUS_CODE.NOT_FOUND);

  const boardUpdate: IBoard = req.body;
  const board = await boardsService.updateById(id, boardUpdate);
  return res.json(board);
});

router.route('/:id').delete(async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(STATUS_CODE.NOT_FOUND);

  const board = await boardsService.deleteById(id);
  return res.sendStatus(board ? STATUS_CODE.OK : STATUS_CODE.NOT_FOUND);
});

export default router;
