import { body } from "express-validator";
import { OTP_LENGTH } from "../../../constants/otp";
import { UserModel } from "../../../model/user";

export const verifyValidator = [
  body('otp').not().isEmpty().withMessage('OTP is required')
  .custom((otp: number, {req}) => {
    if (otp.toString().length !== OTP_LENGTH) {
      return Promise.reject("OTP must have at least 4 number");
    };
    return true;
  }),
  body('email').isEmail().withMessage('Email is required')
  .custom(async (email: string, {req}) => {
    const otp = req.body?.otp;
    const user = await UserModel.findOne({email});
    if (!user) {
      return Promise.reject("User is not existed");
    }
    const validated = user?.validated;
    const otpUser = user?.otp;
    if (validated) {
      return Promise.reject(`Account ${email} validated`);
    }
    if (otpUser !== +otp) {
      return Promise.reject(`OTP for account: ${email} is not correct`);
    }
    user.validated = true;
    user.otp = undefined;
    await user.save();
    return true;
  })
]