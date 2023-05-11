import React from "react";

import { Outlet } from "react-router-dom";

import classes from "./AppLayout.module.scss";
import Header from "Layouts/Partials/AppPartials/Header";
import Sidebar from "Layouts/Partials/AppPartials/Sidebar";

const AppLayout = () => {
  return (
    <div className={classes.appLayoutContainer}>
      <Sidebar />
      <div className={classes.rightBodyContainer}>
        <Header />
        <div className={classes.outletContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
