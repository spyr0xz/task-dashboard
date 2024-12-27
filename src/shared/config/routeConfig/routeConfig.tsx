
import { RouteProps } from 'react-router'
import { AuthPage } from '../../../pages/AuthPage';
import { MainPage } from '../../../pages/MainPage';

export type AppRouteProps = RouteProps & {
  isAuthOnly?: boolean;
}

export enum AppRoutes {
  MAIN = 'main',
  AUTH = 'auth',
  NOT_FOUND = 'not_found'
}

export const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.AUTH]: '/auth',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage />
  },
  [AppRoutes.AUTH]: {
    path: routePath.auth,
    element: <AuthPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <MainPage />
  }
}