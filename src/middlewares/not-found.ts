import { NextFunction, Request, Response } from 'express';

import notFoundError from '../exceptions/not-found-error';

const notFoundMiddleware = (req: Request, res: Response, next: NextFunction) => {
  throw notFoundError(`There is no ${req.originalUrl} on this server`);
};

export default notFoundMiddleware;
