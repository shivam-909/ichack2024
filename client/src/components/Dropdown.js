import {
  Box,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import filterPropertyOptions from "./filterPropertyOptions";

const Dropdown = ({
  filterPropertyKey,
  filterPropertyName,
  handleSetFilterProperty,
  filterProperties,
}) => {
  const options = filterPropertyOptions[filterPropertyKey];
  const selectedFilter = filterProperties[filterPropertyKey];

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
        <InputLabel id="demo-simple-select-autowidth-label">
          {filterPropertyName}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedFilter}
          onChange={(e) => {
            handleSetFilterProperty(filterPropertyKey, e.target.value);
          }}
          autoWidth
          label={filterPropertyName}
        >
          {options.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
