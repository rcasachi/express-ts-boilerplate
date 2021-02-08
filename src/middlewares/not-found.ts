import { Request } from 'express';

import notFoundError from '../exceptions/not-found-error';

const notFoundMiddleware = (req: Request) => {
  throw notFoundError(`There is no ${req.originalUrl} on this server`);
};

export default notFoundMiddleware;
