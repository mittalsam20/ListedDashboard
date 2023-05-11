import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "styles/GlobalStyles.module.scss";
import classes from "./AppContainer.module.scss";

import Login from "routes/components";
import AppLayout from "Layouts/AppLayout";
import Dashboard from "routes/routes/Dashboard/components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route element={<AppLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Route>
  )
);

const AppContainer = () => {
  return (
    <div className={classes.appContainer}>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppContainer;
