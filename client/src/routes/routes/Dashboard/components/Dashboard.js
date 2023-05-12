import React from "react";

import _ from "lodash";

import { Box } from "UIComponents";

import StatBox from "./StatBox";
import ScheduleBox from "./ScheduleBox";
import PieChartBox from "./PieChartBox";
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
      <Box></Box>
      <div className={classes.bottomContainer}>
        <PieChartBox />
        <ScheduleBox />
      </div>
    </div>
  );
};

export default Dashboard;
