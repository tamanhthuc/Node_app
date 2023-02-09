export interface User {
  username: string;
  password: string;
  email: string;
  phone_number: string;
  otp?: number;
  validated?: boolean;
}
