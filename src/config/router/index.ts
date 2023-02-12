import { Router } from 'express';
import AuthenticateRouter from '../../routes/auth';
import UserRouter from '../../routes/user';

interface AppRouterOption {
  path: string;
  router: Router
}
export const AppRouter: Array<AppRouterOption> = [
  {
    path: '/api/auth',
    router: AuthenticateRouter
  },
  {
    path: '/api/user',
    router: UserRouter
  }
];
