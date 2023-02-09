import { model, Schema } from "mongoose";
import { User } from "../../types/model/user";

const UserSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
  },
  username: {
    type: String
  },
  otp: {
    type: Number
  },
  validated: {
    type: Boolean
  }
});

export const UserModel = model('user', UserSchema);
