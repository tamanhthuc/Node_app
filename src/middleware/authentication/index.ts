import { RequestHandler } from "express";
import { verify } from "jsonwebtoken";
import { KEY_GENERATE_TOKEN } from "../../constants/jwt";
import { ResponseEntity } from "../../response";

const authenticationMiddleware: RequestHandler = (req, res, next) => {
  try{
    const authenticateInfo = req.headers['authorization'] as string;
    if (!authenticateInfo) {
      return res.status(403).json(new ResponseEntity({
        code: 403,
        message: "Unauthenticated",
      }))
    }
    const token = authenticateInfo.split('Bearer ')?.[1];
    if (!token) {
      return res.status(403).json(new ResponseEntity({
        code: 403,
        message: "Unauthenticated",
      }))
    }
    try{
      const decoded = verify(token, KEY_GENERATE_TOKEN) as {userId: string, email: string};
      req.user = decoded;
    }catch(err) {
      return res.status(401).json(new ResponseEntity({
        code: 401,
        message: 'Token is not valid'
      }))
    }
    next();
  }catch(err) {
    next(err);
  }
}

export default authenticationMiddleware;
