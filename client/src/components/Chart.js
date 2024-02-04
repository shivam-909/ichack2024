import { Box, Card, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import React from "react";

const Chart = ({ name, data }) => {
  console.log("DATA", data)

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  if (data[0] && typeof data[0] === "object") {
    data = data.map((item) => item["Credits Issued"]);
  }

  let dates = Array.from({ length: 365 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split("T")[0];
  });


  let dateLabels = dates.map((_ , index) => index);

  data = data.slice(0, 365);
  data = data.filter((_, index) => index % 10 === 0);
  dateLabels = dateLabels.filter((_, index) => index % 10 === 0);

  return (
    <Box>
      <LineChart
      
        xAxis={[{ data: dateLabels }]} 
        series={[
          {
            label: name,
            data: data,
          },
        ]}
        width={500}
        height={300}
      />
    </Box>
  );
};

export default Chart;
