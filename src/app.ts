import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express, { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import './utils/uncaughtErrorsHandling';
import requestInfo from './middlewares/requestInfo';
import errorsHandler from './middlewares/errorsHandler';
import HTTPError from './utils/HTTPError';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';

const app = express();

app.use(express.json());

app.use(requestInfo);

const swaggerDocument = YAML.load(
  path.join(dirname(fileURLToPath(import.meta.url)), '..', 'doc', 'api.yaml'),
);
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);
app.use(() => {
  throw new HTTPError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
});

app.use(errorsHandler);

// Check uncaughtException
// throw Error('Uncaught Exception: Oops!');

// Check unhandledRejection
// Promise.reject(Error('Unhandled Rejection: Oops!'));

export default app;
