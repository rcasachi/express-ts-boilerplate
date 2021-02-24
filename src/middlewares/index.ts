import bodyParser from 'body-parser';
import cors from 'cors';
import { Express } from 'express';

import loggerMiddleware from './logger.middleware';

const middlewares = (app: Express) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(loggerMiddleware);
};

export default middlewares;
