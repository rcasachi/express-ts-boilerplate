import { NextFunction } from 'express';
import { validate } from 'indicative/validator';

import notValidError from '../exceptions/not-valid-error';

export const handleValidation = async (data, rules, messages, next: NextFunction) => {
  try {
    await validate(data, rules, messages);
    return next();
  } catch (validationErrors) {
    return next(notValidError(validationErrors));
  }
};
