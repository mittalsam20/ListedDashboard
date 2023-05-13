import React from "react";

import _ from "lodash";

import { Box } from "UIComponents";
import { LineChart } from "AppComponents";
import classes from "./UsersLineChart.module.scss";

import ChevronDownIcon from "SvgComponents/ChevronDownIcon";

const data = [
  {
    id: "Guest",
    color: "hsl(0, 62%, 77%)",
    data: [
      { x: "Week 1", y: 100 },
      { x: "Week 2", y: 200 },
      { x: "Week 3", y: 100 },
      { x: "Week 4", y: 300 },
    ],
  },
  {
    id: "User",
    color: "hsl(101, 59%, 68%)",
    data: [
      { x: "Week 1", y: 200 },
      { x: "Week 2", y: 300 },
      { x: "Week 3", y: 300 },
      { x: "Week 4", y: 400 },
    ],
  },
];

const Legend = props => {
  const { id, color } = props;
  const legendSymbolStyle = { backgroundColor: color };
  return (
    <div className={classes.legendContainer}>
      <div className={classes.indicatorDiv} style={legendSymbolStyle} />
      {id}
    </div>
  );
};

const UsersLineChart = () => {
  return (
    <Box className={classes.usersChartBox}>
      <div className={classes.header}>
        <div className={classes.leftContainer}>
          <span className={classes.title}>{"Activities"}</span>
          <span className={classes.duration}>
            {"May - June 2021"}
            <ChevronDownIcon />
          </span>
        </div>
        <div className={classes.legendsContainer}>
          {_.map(data, ({ id, color }) => (
            <Legend key={id} id={id} color={color} />
          ))}
        </div>
      </div>
      <div className={classes.usersChartContainer}>
        <LineChart data={data} />
      </div>
    </Box>
  );
};

export default UsersLineChart;
