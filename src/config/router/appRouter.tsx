import { Route, TemplateRouter } from "./route";
import * as route from "./routes/index";

export const appRouter = [route.homeRoutes];

export const createRoutes = (routes: TemplateRouter[]): Route[] =>
  routes.map((route) => ({
    path: route.path,
    element: route.element,
    errorElement: <></>,
    children: route.children ? createRoutes(route.children) : undefined,
  }));
