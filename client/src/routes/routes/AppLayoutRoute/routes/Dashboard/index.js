import withAsyncRouteLoading from "Hocs/withAsyncRouteLoading";

const Dashboard = withAsyncRouteLoading(() => import("./components"));

const DashboardRoutes = () => {
  return {
    path: "dashboard",
    element: <Dashboard />,
    children: [],
  };
};

export default DashboardRoutes;
