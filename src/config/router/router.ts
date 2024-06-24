import { createBrowserRouter } from "react-router-dom";
import { appRouter, createRoutes } from "./appRouter";

export const ROUTES = createBrowserRouter(createRoutes(appRouter));
