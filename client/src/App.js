import { Container, CssBaseline, Drawer, Grid, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { BarChart } from "@mui/x-charts/BarChart";
import Dropdown from "./components/Dropdown";
import Chart from "./components/Chart";
import EntryAdder from "./components/EntryAdder";
import Entries from "./components/Entries";
import { useState } from "react";
import DrawerContent from "./components/DrawerContent";

function App() {
  const [filterProperties, setFilterProperties] = useState({
    region: "NA",
    sector: "Technology",
  });

  const [showAnalysis, setShowAnalysis] = useState(false);

  const [historyData, setHistoryData] = useState({});

  const [predictionData, setPredictionData] = useState({});

  const [analysisData, setAnalysisData] = useState({});

  const [loading, setLoading] = useState([]);

  const fetchAllData = () => {
    setLoading(["history", "prediction", "analysis"]);
    fetch("").then(() => {
      setLoading(loading.filter((x) => x !== "history"));
    });
    fetch("").then(() => {
      setLoading(loading.filter((x) => x !== "prediction"));
    });
    fetch("").then(() => {
      setLoading(loading.filter((x) => x !== "analysis"));
    });
  };

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
        <Drawer
          open={showAnalysis}
          onClose={() => {}}
          PaperProps={{
            sx: { width: "35%" },
          }}
          ModalProps={{
            onBackdropClick: () => {
              setShowAnalysis(false);
            },
          }}
        >
          <DrawerContent />
        </Drawer>
        <EntryAdder
          handleSetFilterProperty={handleSetFilterProperty}
          filterProperties={filterProperties}
          fetchAllData={fetchAllData}
        />
        <Entries />
        <Grid container spacing={5} mt={1}>
          <Grid xs={6}>
            <Stack>
              <Chart chartType="price" />
              <Chart chartType="allocation" />
              <Chart chartType="emissions" />
            </Stack>
          </Grid>
          <Grid xs={6}>
            <Stack>
              <Chart chartType="price" />
              <Chart chartType="emissions" />
              <Button
                onClick={() => {
                  setShowAnalysis(true);
                }}
              >
                View Analysis
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
