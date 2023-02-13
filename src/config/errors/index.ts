import { ErrorRequestHandler } from "express";
import { ResponseEntity } from "../../response";

const errorHandlingController: ErrorRequestHandler = (err, req, res, next) => {
  try{
    const message = err?.message || "Server Internal Error";
    const code = err?.code || 500;
    
    res.json(new ResponseEntity({
      code,
      message
    }));
  }catch(err) {
    next(err);
  }
};

export default errorHandlingController;
