import { Request, Response, NextFunction } from 'express';
import { IError } from '../interfaces/IError';

// Handle any errors that come up
export const errorHandler = (err: IError, req: Request, res: Response, next: NextFunction): void => {
  if (err.status) {
    res.status(err.status).send({ error: err.message });
  }
  else {
    console.error(err);
    res.status(500).send({ error: 'Internal server error' });
  }
}

// Handle case where user requests nonexistent endpoint
export const nullRoute = (req: Request, res: Response): void => {
  res.status(404).send({ error: 'Not found' });
}