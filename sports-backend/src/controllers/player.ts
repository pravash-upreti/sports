import { Request, Response } from 'express';

export let getPlayers = (req: Request, res: Response) => {
  res.json({
    'players': [
      'one',
      'two'
    ]
  });
};
