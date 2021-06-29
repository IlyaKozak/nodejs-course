import path from 'path';

import express, { Application } from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import './utils/uncaughtErrorsHandling';
import requestInfo from './middlewares/requestInfo';
import errorsHandler from './middlewares/errorsHandler';
import HTTPError from './utils/HTTPError';
// import homeRouter from './modules/home/home.controller';
import userRouter from './modules/users/user.router';
import boardRouter from './modules/boards/board.router';
import taskRouter from './modules/tasks/task.router';
import auth from './middlewares/auth';
import checkToken from './middlewares/checkToken';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(requestInfo);
app.use(checkToken);

const swaggerDocument = YAML.load(
  path.join(__dirname, '..', 'doc', 'api.yaml'),
);
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
// app.use('/', homeRouter);
app.use('/login', auth);
app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);
app.use(() => {
  throw new HTTPError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
});

app.use(errorsHandler);

export default app;
