import { Request, Response } from 'express';

const exception = (err: any, req: Request, res: Response, _) => {
  const { message, status, statusCode } = err;

  const body = {
    message,
    errors: err?.errors ?? [],
    status: status || 'error',
    statusCode: statusCode || 500,
  };

  return res.status(statusCode).json(body);
};

export default exception;
