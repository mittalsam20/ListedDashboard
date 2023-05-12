import AppLayoutRoute from "./routes/AppLayoutRoute";

import withAsyncRouteLoading from "Hocs/withAsyncRouteLoading";

const Login = withAsyncRouteLoading(() => import("./components"));

export const createRoutes = () => {
  return [
    {
      path: "/",
      exact: true,
      element: <Login />,
    },
    AppLayoutRoute(),
  ];
};

export default createRoutes;
