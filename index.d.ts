// import type { User } from "./src/types/model/user";

declare namespace Express {
  export interface Request {
    user?: {
      userId: string;
      email: string;
    };
    userInfo?: any;
  }
}