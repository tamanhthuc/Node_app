import { RequestHandler } from "express";
import { IGNORE_FIELD_USER } from "../../constants/exception/user";
import { UserModel } from "../../model/user";
import { ResponseEntity } from "../../response";

const userMiddleware: RequestHandler<any, ResponseEntity> = async (req, res, next) => {
  try{
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(403).json(new ResponseEntity({
        code: 403,
        message: 'Unauthenticated'
      }));
    }
    const user = await UserModel.findById(userId).select(IGNORE_FIELD_USER).lean();
    if (!user) {
      return res.status(404).json(new ResponseEntity({
        code: 404,
        message: 'User is not found'
      }))
    };
    req.userInfo = user;
    next();
  }catch(err) {
    next(err);
  }
};

export default userMiddleware;
