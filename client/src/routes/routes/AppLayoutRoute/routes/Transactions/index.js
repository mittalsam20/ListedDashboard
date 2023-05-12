import withAsyncRouteLoading from "Hocs/withAsyncRouteLoading";

const Transactions = withAsyncRouteLoading(() => import("./components"));

const TransactionsRoutes = () => {
  return {
    path: "transactions",
    element: <Transactions />,
    children: [],
  };
};

export default TransactionsRoutes;
