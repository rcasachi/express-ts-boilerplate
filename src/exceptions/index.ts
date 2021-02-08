import { Request, Response } from 'express';

const exception = (err: any, req: Request, res: Response) => {
  const { status, statusCode, message } = err;

  res.status(statusCode).json({
    message,
    status: status || 'error',
    statusCode: statusCode || 500,
  });
};

export default exception;
