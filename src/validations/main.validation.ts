import { NextFunction, Request, Response } from 'express';

import { handleValidation } from '../helpers/validations';

const rules = {
  name: 'required',
  email: 'required|email',
};

const messages = {
  required: (field: string) => `${field} is required`,
  'email.email': 'Please enter a valid email address',
};

const mainValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  await handleValidation(req.body, rules, messages, next);
};

export default mainValidation;
