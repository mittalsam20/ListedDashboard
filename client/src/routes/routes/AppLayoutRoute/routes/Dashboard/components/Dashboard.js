import React from "react";

import _ from "lodash";

import StatBox from "./StatBox";
import ScheduleBox from "./ScheduleBox";
import UsersLineChart from "./UsersLineChart";
import ProductsPieChart from "./ProductsPieChart";

import classes from "./Dashboard.module.scss";
import { statBoxes } from "../modules/DashboardUtils";

const Dashboard = () => {
  return (
    <div className={classes.dashboardPageContainer}>
      <div className={classes.statBoxesContainer}>
        {_.map(statBoxes, ({ ...props }) => (
          <StatBox {...props} />
        ))}
      </div>
      <UsersLineChart />
      <div className={classes.bottomContainer}>
        <ProductsPieChart />
        <ScheduleBox />
      </div>
    </div>
  );
};

export default Dashboard;
