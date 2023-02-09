import { RequestHandler } from "express";

interface RegisterControllerBody {
  email: string;
  password: string;
  phone_number: string;
};

const registerController: RequestHandler = (req, res, next) => {
  try{
    const {  } = req.body;
  }catch(err) {
    next(err);
  }
};

export default registerController;
