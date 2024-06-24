export interface TemplateRouter {
  path: string;
  namePath?: string;
  element: JSX.Element;
  icon?: JSX.Element;
  children?: TemplateRouter[];
}
export interface Route {
  path: string;
  element: JSX.Element;
  errorElement: JSX.Element;
  children?: Route[];
}
