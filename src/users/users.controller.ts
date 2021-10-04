import { NextFunction, Request, Response } from 'express';

import appError from '../core/exceptions/app.error';
import messages from '../core/serializer/messages.serializer';
import { REGISTRATION_SUCCESSFUL } from './users.locales';
import { saveUser } from './users.service';

export const store = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await saveUser(req.body);
    return messages(res, REGISTRATION_SUCCESSFUL);
  } catch {
    return next(appError());
  }
};
