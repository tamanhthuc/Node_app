import { RequestHandler } from "express";
import { ValidationError, validationResult } from "express-validator";
import { ResponseEntity } from "../../response";

const validatorMiddleware: RequestHandler<any, ResponseEntity<ValidationError[]>> = (req, res, next) => {
  try {
    const validate = validationResult(req);
    if (validate.isEmpty()) {
      return next();
    }
    const errors = validate.array();
    return res.json(
      new ResponseEntity<ValidationError[]>({
        code: 422,
        message: errors[0].msg,
        data: errors,
      })
    );
  } catch (err) {
    next(err);
  }
};

export default validatorMiddleware;
