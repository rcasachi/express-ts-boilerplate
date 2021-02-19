import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => res.json('it is working');

export const testPost = (req: Request, res: Response) => res.json('it is working');
