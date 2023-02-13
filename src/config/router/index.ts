import { Router } from 'express';
import AuthenticateRouter from '../../routes/auth';
import UserRouter from '../../routes/user';
import ProductRouter from '../../routes/product';
import ShopRouter from '../../routes/shop';

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
  },
  {
    path: '/api/product',
    router: ProductRouter
  },
  {
    path: '/api/shop',
    router: ShopRouter
  }
];
