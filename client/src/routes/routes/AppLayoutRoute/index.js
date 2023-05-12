import DashboardRoutes from "./routes/Dashboard";
import TransactionsRoutes from "./routes/Transactions";

import withAsyncRouteLoading from "Hocs/withAsyncRouteLoading";

const AppLayout = withAsyncRouteLoading(() => import("Layouts/AppLayout"));

const AppLayoutRoutes = () => {
  return {
    path: null,
    element: <AppLayout />,
    children: [DashboardRoutes(), TransactionsRoutes()],
  };
};

export default AppLayoutRoutes;
