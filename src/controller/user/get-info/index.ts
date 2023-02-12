import { RequestHandler } from "express";
import { ResponseEntity } from "../../../response";

const getInfoUserController: RequestHandler<any, ResponseEntity> = (req, res, next) => {
  try{
    const user = req?.userInfo;
    console.log(user);
    if (!user) {
      return res.status(404).json(new ResponseEntity({
        code: 404,                
        message: "User is not existed"
      }))
    };
    res.json(new ResponseEntity({
      code: 200,
      message: 'OK',
      data: user
    }))
  }catch(err) {
    next(err);
  }
};

export default getInfoUserController;
