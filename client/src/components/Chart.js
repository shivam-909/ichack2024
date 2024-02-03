import { Box, Card, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import React from "react";

const Chart = ({ name }) => {
  return (
    <Box>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            label: "China",
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
          {
            label: "Japan",
            data: [4, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={500}
        height={300}
      />
    </Box>
  );
};

export default Chart;
