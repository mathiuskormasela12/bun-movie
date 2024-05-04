import type { NextFunction, Request, Response } from 'express';
import {validationResult, body} from 'express-validator';

export const checkCreateMovieBodyMiddleware = [
  body('title', 'Title is required').isString(),
  body('description', 'Description is required').isString(),
  body('releasedDate', 'Release date is required').isString(),
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({
        statusCode: 400,
        errors: errors?.array()?.map(err => ({
          [`${err.type}`]: err.msg
        }))
      });
    }

    return next();
  }
];