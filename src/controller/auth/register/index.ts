import { RequestHandler } from "express";
import bcrypt from 'bcrypt';
import { ResponseEntity } from "../../../response";
import { SALT_ROUND } from "../../../constants/encrypt";
import { random } from "../../../utils/random";
import { sendMail } from "../../../utils/mail";
import { UserModel } from "../../../model/user";

interface RegisterControllerBody {
  email: string;
  password: string;
  phone_number: string;
  username: string;
};

const registerController: RequestHandler<any, ResponseEntity, RegisterControllerBody> = async (req, res, next) => {
  try{
    const { email, password, phone_number, username } = req.body;
    const hash = await bcrypt.hash(password, SALT_ROUND);
    const otp = random(1000, 9999);

    const response = await sendMail({
      to: email,
      subject: 'OTP for validation the app',
      html: `<p>OTP for validation account: ${otp}</p>`
    });

    const newUser = new UserModel({
      email: email,
      password: hash,
      phone_number: phone_number,
      otp: otp,
      validated: false,
      username
    });

    const data = await newUser.save();
    res.json(new ResponseEntity({
      code: 200,
      message: 'OK',
      data: `Đã gửi OTP đến email: ${email}`
    }));
  }catch(err) {
    next(err);
  }
};

export default registerController;
