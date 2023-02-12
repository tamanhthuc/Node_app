import { RequestHandler } from "express";
import { ResponseEntity } from "../../../response";

interface VerifyControllerRequest {
  username: string;
  otp: number;
}
const verifyController: RequestHandler<any, ResponseEntity, VerifyControllerRequest> = (req, res, next) => {
  try{
    res.json(new ResponseEntity({
      code: 200,
      message: 'OK'
    }));
  }catch(err) {
    next(err);
  }
};

export default verifyController;
