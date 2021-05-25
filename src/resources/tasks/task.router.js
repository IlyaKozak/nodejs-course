const router = require('express').Router({ mergeParams: true });

const STATUS_CODE = require('../../common/http-status-codes');

const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.readAll();
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.readById(id);
  res.status(task ? STATUS_CODE.OK : STATUS_CODE.NOT_FOUND).json(task);
});

router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  const taskToCreate = new Task({
    ...req.body,
    boardId,
  });
  const task = await tasksService.create(taskToCreate);
  res.status(STATUS_CODE.CREATED).json(task);
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const taskUpdate = req.body;
  const task = await tasksService.updateById(id, taskUpdate);
  res.json(task);
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const task = await tasksService.deleteById(id);
  res.sendStatus(task ? STATUS_CODE.OK : STATUS_CODE.NOT_FOUND);
});

module.exports = router;
