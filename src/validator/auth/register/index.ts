import { body } from "express-validator";
import { PASSWORD_REGEX } from "../../../constants/regex";
import { UserModel } from "../../../model/user";

export const registerValidator = [
  body("email")
    .not()
    .isEmpty()
    .withMessage("Email is required")
    .custom(async (email: string, { req }) => {
      try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
          return Promise.reject("User is existed with the email: " + email);
        }
        return true;
      } catch (err) {
        return Promise.reject("Server Internal Error");
      }
    }),
  body('password').not().isEmpty().withMessage("Password is required")
  .custom((password: string, {req}) => {
    const isValidPassword = PASSWORD_REGEX.test(password);
    if (!isValidPassword) {
      return Promise.reject("Password must be minimum 8 characters, at least 1 letter, 1 number and 1 special character");
    }
    return true;
  }),
  body('phone_number').not().isEmpty().withMessage("Phone number is required")
];
