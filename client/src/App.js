import { Container, CssBaseline, Grid, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { BarChart } from "@mui/x-charts/BarChart";
import Dropdown from "./components/Dropdown";
import Chart from "./components/Chart";
import EntryAdder from "./components/EntryAdder";
import Entries from "./components/Entries";
import { useState } from "react";

function App() {
  const [filterProperties, setFilterProperties] = useState({
    region: "NA",
    sector: "Technology",
  });

  const handleSetFilterProperty = (filterPropertyKey, newValue) => {
    setFilterProperties({
      ...filterProperties,
      [filterPropertyKey]: newValue,
    });
  };

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <EntryAdder
          handleSetFilterProperty={handleSetFilterProperty}
          filterProperties={filterProperties}
        />
        <Entries />
        <Grid container spacing={5} mt={1}>
          <Grid xs={6}>
            <Stack>
              <Chart name={"test"} />
              <Chart />
            </Stack>
          </Grid>
          <Grid xs={6}>
            <Stack>
              <Chart />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
