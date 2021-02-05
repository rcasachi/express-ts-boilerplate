import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => res.send('it is working');
