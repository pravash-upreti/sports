import { Request, Response } from 'express';

export const index = (req: Request, res: Response) => {
  return res.json({
    message: 'Test successful'
  });
};
