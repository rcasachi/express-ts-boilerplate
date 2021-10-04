import { Request, Response } from 'express';

import { STATUS_ACTIVE } from './core/locales/response.locales';

export const index = (req: Request, res: Response) =>
  res.json({
    status: STATUS_ACTIVE,
  });
