import { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import loggerMiddleware from './logger.middleware';

const middlewares = (app: Express) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(loggerMiddleware);
};

export default middlewares;
