import { body } from "express-validator";
import bcrypt from 'bcrypt'
import { UserModel } from "../../../model/user";

export const loginValidator = [
  body("email")
    .isEmail()
    .withMessage("Email is required")
    .custom(async (email: string, { req }) => {
      const user = await UserModel.findOne({email: email}).lean();
      if (!user) {
        return Promise.reject("User is not existed with email: " + email);
      };
      const password = user.password;
      const passwordRequest = req.body?.password;
      if (!passwordRequest) {
        return Promise.reject("Password is required");
      }
      const isMatchedPassword = await bcrypt.compare(passwordRequest, password);
      if (!isMatchedPassword) {
        return Promise.reject("Password is not valid");
      }
      return true;
    }),
  body("password").not().isEmpty().withMessage("Password is required")
];
