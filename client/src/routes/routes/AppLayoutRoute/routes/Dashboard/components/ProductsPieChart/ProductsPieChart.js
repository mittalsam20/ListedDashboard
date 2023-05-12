import React from "react";

import { Box } from "UIComponents/";
import { PieChart } from "AppComponents";

import classes from "./ProductsPieChart.module.scss";
import ChevronDownIcon from "SvgComponents/ChevronDownIcon";

const data = [
  {
    id: "BASIC_TEES",
    label: "Basic Tees",
    value: 55,
    color: "hsl(114, 70%, 50%)",
  },
  {
    id: "CUSTOMe_SHORT_PANTS",
    label: "Custom Short Pants",
    value: 14,
    color: "hsl(121, 70%, 50%)",
  },
  {
    id: "SUPER_HOODIES",
    label: "Super Hoodies",
    value: 31,
    color: "hsl(226, 70%, 50%)",
  },
];

const ProductsPieChart = props => {
  return (
    <Box className={classes.pieChartBox}>
      <div className={classes.header}>
        <span className={classes.title}>{"Top products"}</span>
        <div className={classes.rightContainer}>
          {"May - June 2021"} <ChevronDownIcon />
        </div>
      </div>
      <div className={classes.pieChartContainer}>
        <PieChart data={data} />
      </div>
    </Box>
  );
};

export default ProductsPieChart;
