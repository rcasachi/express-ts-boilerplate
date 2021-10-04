import { NextFunction, Request, Response } from 'express';

import { localeIsRequired } from '../core/locales/response.locales';
import { handleValidation } from '../core/package/validation/validation.package';
import { EMAIL_INVALID, EMAIL_NOT_UNIQUE, PASSWORD_LONG } from './users.locales';

const rules = {
  post: {
    name: 'required',
    email: 'required|email|unique:users:email',
    password: 'required|min:8',
  },
};

const messages = {
  post: {
    required: localeIsRequired,
    'email.email': EMAIL_INVALID,
    'email.unique': EMAIL_NOT_UNIQUE,
    'password.min': PASSWORD_LONG,
  },
};

const usersPostValidation = async (req: Request, res: Response, next: NextFunction) => {
  await handleValidation(req.body, rules.post, messages.post, next);
};

export { usersPostValidation };
