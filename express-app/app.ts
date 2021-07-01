// import path from 'path';

// import express, { Application } from 'express';
// import cors from 'cors';
// import swaggerUI from 'swagger-ui-express';
// import YAML from 'yamljs';
// import { ReasonPhrases, StatusCodes } from 'http-status-codes';

// import '../src/utils/uncaughtErrorsHandling';
// import requestInfo from './middlewares/requestInfo';
// import errorsHandler from './middlewares/errorsHandler';
// import HTTPError from '../src/utils/HTTPError';
// // import userRouter from '../express-app/users/user.router';
// // import boardRouter from './resources/boards/board.router';
// // import taskRouter from './resources/tasks/task.router';
// // import auth from './middlewares/auth';
// // import checkToken from './middlewares/checkToken';

// const app: Application = express();

// app.use(cors());
// app.use(express.json());
// app.use(requestInfo);

// const swaggerDocument = YAML.load(
//   path.join(__dirname, '..', 'doc', 'api.yaml'),
// );
// app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// app.use(() => {
//   throw new HTTPError(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
// });

// app.use(errorsHandler);

// export default app;
