import { Request } from 'express';

import notFoundError from '../exceptions/not-found.error';
import { localeNotFoundRoute } from '../locales/response.locales';

const notFoundMiddleware = (req: Request) => {
  throw notFoundError(localeNotFoundRoute(req.originalUrl));
};

export default notFoundMiddleware;
