import { Router } from 'express';
import AuthenticateRouter from '../../routes/auth';

interface AppRouterOption {
  path: string;
  router: Router
}
export const AppRouter: Array<AppRouterOption> = [
  {
    path: '/api/auth',
    router: AuthenticateRouter
  }
];
