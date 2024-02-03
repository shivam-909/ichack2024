import { Card, Stack } from "@mui/material";
import React from "react";

const Entries = () => {
  const mock = [1, 2, 3];

  return (
    <Stack>
      {mock.map((m) => (
        <Card></Card>
      ))}
    </Stack>
  );
};

export default Entries;
