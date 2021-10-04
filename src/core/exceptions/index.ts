import { Request, Response } from 'express';

import { STATUS_ERROR } from '../locales/exception.locales';
import errorsSerializer from '../serializer/errors.serializer';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exceptions = (err, req: Request, res: Response, _) => {
  const { message, status, statusCode } = err;

  const body = errorsSerializer(message, statusCode || 500, status || STATUS_ERROR, err?.errors);

  return res.status(statusCode).json(body);
};

export default exceptions;
