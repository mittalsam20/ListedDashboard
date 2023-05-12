import React from "react";

import _ from "lodash";

import { Box } from "UIComponents";
import classes from "./ScheduleBox.module.scss";
import { schedules } from "../../modules/DashboardUtils";
import ChevronRightIcon from "SvgComponents/ChevronRightIcon";

const Schedule = props => {
  const { color, title, time, venue } = props;
  const indicatorDivStyles = { backgroundColor: color };

  return (
    <div className={classes.meetingContainer}>
      <div className={classes.indicatorDiv} style={indicatorDivStyles} />
      <div className={classes.meetingInfoContainer}>
        <span className={classes.meetingTitle}>{title}</span>
        <span className={classes.info}>{time}</span>
        <span className={classes.info}>{venue}</span>
      </div>
    </div>
  );
};

const ScheduleBox = () => {
  return (
    <Box className={classes.scheduleContainer}>
      <div className={classes.header}>
        <span className={classes.title}>{"Today’s schedule"}</span>
        <div className={classes.seeAllContainer}>
          {"See All"} <ChevronRightIcon />
        </div>
      </div>
      <div className={classes.schedulesContainer}>
        {_.map(schedules, ({ ...props }) => (
          <Schedule {...props} />
        ))}
      </div>
    </Box>
  );
};

export default ScheduleBox;
