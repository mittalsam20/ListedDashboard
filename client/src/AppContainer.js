import React from "react";

import createRoutes from "routes";
import { useRoutes } from "react-router-dom";

import "styles/GlobalStyles.module.scss";
import classes from "./AppContainer.module.scss";

const AppContainer = () => {
  const nestedRoutes = createRoutes();
  const routes = useRoutes(nestedRoutes);

  return <div className={classes.appContainer}>{routes}</div>;
};

export default AppContainer;
