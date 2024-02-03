import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const Dropdown = () => {
  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
    <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
    <Select
      labelId="demo-simple-select-autowidth-label"
      id="demo-simple-select-autowidth"
      value={10}
      onChange={() => {}}
      autoWidth
      label="Age"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Twenty</MenuItem>
      <MenuItem value={21}>Twenty one</MenuItem>
      <MenuItem value={22}>Twenty one and a half</MenuItem>
    </Select>
  </FormControl>
  )
}

export default Dropdown