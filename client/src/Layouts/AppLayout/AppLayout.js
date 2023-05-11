import React from "react";

import { Outlet } from "react-router-dom";

import classes from "./AppLayout.module.scss";
import Header from "Layouts/Partials/AppPartials/Header";
import Sidebar from "Layouts/Partials/AppPartials/Sidebar";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
