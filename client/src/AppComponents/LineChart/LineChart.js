import React from "react";

import { ResponsiveLine } from "@nivo/line";

const LineChart = props => {
  const { data } = props;
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 40, right: 40, bottom: 50, left: 30 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        // reverse: false,
      }}
      yFormat=" >-.2f"
      curve="basis"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 20,
        tickRotation: 2,
        legend: "",
      }}
      axisLeft={{
        tickValues: 5,
        tickSize: 0,
        tickPadding: 12,
        tickRotation: 0,
        legend: "",
      }}
      enableGridX={false}
      colors={{ scheme: "category10" }}
      lineWidth={3}
      enablePoints={false}
      isInteractive={false}
      enableCrosshair={false}
      legends={[]}
      animate={false}
    />
  );
};

export default LineChart;
