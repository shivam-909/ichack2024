import { Container, CssBaseline, Grid, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { BarChart } from "@mui/x-charts/BarChart";
import Dropdown from "./components/Dropdown";
import Chart from "./components/Chart";

function App() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <Stack direction="row" spacing={3} mt={3}>
          <Dropdown />
          <Dropdown />
        </Stack>

        <Grid container spacing={2}>
          <Grid xs={6}>
            <Stack>
              <Chart />
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
