import { Response } from 'express';

const messages = (res: Response, message: string, statusCode = 200) => {
  return res.status(statusCode).json({
    message,
  });
};

export default messages;
