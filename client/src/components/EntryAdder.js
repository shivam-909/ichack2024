import { Box, Button, Card, Stack } from "@mui/material";
import React from "react";
import Dropdown from "./Dropdown";

const EntryAdder = ({
  filterProperties,
  handleSetFilterProperty,
  fetchAllData,
}) => {
  return (
    <Box mt={2}>
      <Card
        variant="outlined"
        sx={{ width: "auto", maxWidth: "100%", display: "inline-block" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          p={1}
          sx={{ width: "auto", maxWidth: "100%" }}
        >
          <Stack direction="row" alignItems="center">
            <Dropdown
              filterProperties={filterProperties}
              handleSetFilterProperty={handleSetFilterProperty}
              filterPropertyKey="region"
              filterPropertyName="Region"
            />
            <Dropdown
              filterProperties={filterProperties}
              handleSetFilterProperty={handleSetFilterProperty}
              filterPropertyKey="sector"
              filterPropertyName="Sector"
            />
          </Stack>

          <Box pr={1}>
            <Button variant="outlined" onClick={fetchAllData}>
              Add Entry
            </Button>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default EntryAdder;
