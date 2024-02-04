import { Box, Card, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import React from "react";

const Chart = ({ name, data }) => {
  console.log("DATA", data, typeof data)
  if (data === undefined) {
    return <div>Loading...</div>;
  }

  if (data[0] && typeof data[0] === "object") {
    console.log(data[0])
    if (data[0]["Credits Issued"]) {
      data = data.map((item) => item["Credits Issued"]);
    } else if (data[0]["Close"]) {
      data = data.map((item) => item["Close"]);
    } else if (data[0]["average"]) {
      data = data.map((item) => item["average"]);
    }
  }

  // get the length of data

  let length = data.length;

  let dates = Array.from({ length: length }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date.toISOString().split("T")[0];
  });

  let dateLabels = dates.map((_ , index) => index);

  data = data.filter((v, index) => (index % 10 === 0) && (v < 100000));
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
