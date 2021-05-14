const router = require('express').Router();

const STATUS_CODE = require('../../common/http-status-codes');

const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.readAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.readById(id);
  res.json(user ? User.toResponse(user) : {});
});

router.route('/').post(async (req, res) => {
  const userToCreate = new User(req.body);
  const user = await usersService.create(userToCreate);
  res.status(STATUS_CODE.CREATED).json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const { id } = req.params;
  const userUpdate = req.body;
  const user = await usersService.updateById(id, userUpdate);
  res.json(user ? User.toResponse(user) : user);
});

router.route('/:id').delete(async (req, res) => {
  const { id } = req.params;
  const user = await usersService.deleteById(id);
  res.json(user ? User.toResponse(user) : user);
});

module.exports = router;
