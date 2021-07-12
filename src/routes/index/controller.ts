import { Request, Response } from 'express';

export const getIndex = (req: Request, res: Response): void => {
  res.status(200).send({ message: 'Index' });
}