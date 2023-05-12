import React from "react";

import { ResponsivePie } from "@nivo/pie";

const PieChart = props => {
  const { data } = props;
  return (
    <ResponsivePie
      data={data}
      activeOuterRadiusOffset={1}
      margin={{ top: 0, right: 0, bottom: 0, left: -252 }}
      colors={{ scheme: "pastel1" }}
      enableArcLinkLabels={false}
      animate={false}
      legends={[
        {
          anchor: "right",
          direction: "column",
          justify: false,
          translateX: -121,
          itemsSpacing: 20,
          itemWidth: 83,
          itemHeight: 25,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 17,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
