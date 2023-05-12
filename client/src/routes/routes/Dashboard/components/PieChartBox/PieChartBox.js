import React from "react";

import classes from "./PieChartBox.module.scss";
import Box from "UIComponents/Box/Box";
import ChevronDownIcon from "SvgComponents/ChevronDownIcon";

const PieChartBox = props => {
  const {} = props;
  return (
    <Box className={classes.pieChartBox}>
      <div className={classes.header}>
        <span className={classes.title}>{"Top products"}</span>
        <div className={classes.rightContainer}>
          {"May - June 2021"} <ChevronDownIcon />
        </div>
      </div>
      <div className={classes.pieChartContainer}>{"PIE"}</div>
    </Box>
  );
};

export default PieChartBox;
