import { NextFunction, Request, Response } from 'express';

const exception = (err: any, req: Request, res: Response, next: NextFunction) => {
  const { status, statusCode, message } = err;

  res.status(statusCode).json({
    message,
    status: status || 'error',
    statusCode: statusCode || 500,
  });
};

export default exception;
