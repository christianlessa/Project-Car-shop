import { Request, Response, NextFunction } from 'express';
import { ErrorTypes } from '../errors/catalog';

const validationId = (req: Request, res: Response, next: NextFunction) => {
  if (req.params.id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);

  next();
};

export default validationId;
