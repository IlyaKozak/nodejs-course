import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.route('/').get((req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

export default router;
