import { RequestHandler } from "express";
import jwt from 'jsonwebtoken';
import { IGNORE_FIELD_USER } from "../../../constants/exception/user";
import { KEY_GENERATE_TOKEN } from "../../../constants/jwt";
import { UserModel } from "../../../model/user";
import { ResponseEntity } from "../../../response";
import { sendMail } from "../../../utils/mail";
import { random } from "../../../utils/random";

interface LoginControllerRequest {
  email: string;
  password: string;
};

const loginController: RequestHandler<any, ResponseEntity, LoginControllerRequest> = async (req, res, next) => {
  try{
    const { email } = req.body;
    const user = await UserModel.findOne({email}, IGNORE_FIELD_USER);
    if (!user) {
      throw new Error("User is not exist")
    };

    const isValidated = user?.validated;
    if (!isValidated) {
      const otp = random(1000, 9999);
      await sendMail({
        to: email,
        subject: 'OTP for validation the app',
        html: `<p>OTP for validation the account: ${otp}</p>`
      });
      user.validated = false;
      user.otp = otp;
      await user.save();
      return res.status(403).json(new ResponseEntity({
        message: 'Sent OTP to the email: ' + email,
        code: 403,
      }));
    };

    const token = jwt.sign({
      userId: user._id,
      email
    }, KEY_GENERATE_TOKEN);

    res.json(new ResponseEntity({
      message: 'OK',
      code: 200,
      data: {
        user,
        token
      }
    }));
  }catch(err) {
    next(err);
  }
};

export default loginController;
