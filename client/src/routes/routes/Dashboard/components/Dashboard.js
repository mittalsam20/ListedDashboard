import React from "react";

import classes from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={classes.dashboardPageContainer}>
      <div className={classes.statBoxesContainer}></div>
      <div></div>
      <div className={classes.bottomContainer}>
        <div className={classes.pieChartContainer}></div>
        <div className={classes.scheduleContainer}></div>
      </div>
    </div>
  );
};

export default Dashboard;
