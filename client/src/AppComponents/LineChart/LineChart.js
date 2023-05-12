import React from "react";

import { ResponsiveLine } from "@nivo/line";

const LineChart = props => {
  const { data } = props;
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
        tickPadding: 5,
        tickRotation: 2,
        legend: "",
        legendOffset: 60,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 12,
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      colors={{ scheme: "category10" }}
      lineWidth={3}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="x"
      pointLabelYOffset={-12}
      areaBlendMode="darken"
      isInteractive={false}
      enableCrosshair={false}
      legends={[
        {
          anchor: "top-right",
          direction: "row",
          justify: false,
          translateX: 17,
          translateY: -52,
          itemsSpacing: 20,
          itemDirection: "left-to-right",
          itemWidth: 67,
          itemHeight: 10,
          itemOpacity: 0.75,
          symbolSize: 11,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={false}
    />
  );
};

export default LineChart;
