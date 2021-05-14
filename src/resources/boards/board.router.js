const router = require('express').Router();

const Board = require('./board.model');
const boardsService = require('./board.service');
const STATUS_CODE = require('../../common/http-status-codes');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.readAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.readById(id);
  res.status(board ? STATUS_CODE.OK : STATUS_CODE.NOT_FOUND).json(board);
});

router.route('/').post(async (req, res) => {
  const boardToCreate = new Board(req.body);
  const board = await boardsService.create(boardToCreate);
  res.status(STATUS_CODE.CREATED).json(board);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const boardUpdate = req.body;
  const board = await boardsService.updateById(id, boardUpdate);
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.deleteById(id);
  res.sendStatus(board ? STATUS_CODE.OK : STATUS_CODE.NOT_FOUND);
});

module.exports = router;
