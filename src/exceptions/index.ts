import { Request, Response } from 'express';

import errorsSerializer from '../serializers/errors.serializer';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exception = (err, req: Request, res: Response, _) => {
  const { message, status, statusCode } = err;

  const body = errorsSerializer(message, statusCode || 500, status || 'error', err?.errors);

  return res.status(statusCode).json(body);
};

export default exception;
