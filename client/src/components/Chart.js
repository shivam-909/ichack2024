import { Box, Card, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import React from "react";

const Chart = ({ name }) => {
  const dates = Array.from({ length: 365 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split("T")[0];
  });

  // Convert dates to a more simple numeric or categorical format if necessary
  const dateLabels = dates.map((_ , index) => index);

  const dummyData = Array.from({ length: 365 }, () => Math.random() * 10);

  const filteredDates = dateLabels.filter((_, index) => index % 10 === 0);
  
  // Filter to get every 10th data point
  const filteredDummyData = dummyData.filter((_, index) => index % 10 === 0);

  return (
    <Box>
      <LineChart
      
        xAxis={[{ data: filteredDates }]} 
        series={[
          {
            label: name,
            data: filteredDummyData,
          },
        ]}
        width={500}
        height={300}
      />
    </Box>
  );
};

export default Chart;
