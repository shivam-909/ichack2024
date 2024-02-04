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
    console.log("FETCHING ALL DATA");
    setLoading(["history", "prediction", "analysis"]);
    fetch("http://localhost:3000/prediction")
      .then((response) => response.json())
      .then((data) => {
        setpredictionPriceData(data["priceChart"]["predictions"]);
        setPredictionAllocationData(data["allocationChart"]);
        setLoading((prev) => prev.filter((item) => item !== "prediction"));
      }).catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleSetFilterProperty = (filterPropertyKey, newValue) => {
    setFilterProperties({
      ...filterProperties,
      [filterPropertyKey]: newValue,
    });
  };
  useEffect(() => {
    fetchAllData();
  }, []);


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
              <Chart data={historyData["priceChart"]} name={"Historical Prices"} chartType="price" />
              <Chart data={historyData["allocationChart"]} name={"Historical Allocations"} chartType="allocation" />
              <Chart name={"Historical Emissions"} chartType="emissions" />
            </Stack>
          </Grid>
          <Grid xs={6}>
            <Stack>
              <Chart name={"Predicted Price"} data={predictionPriceData} chartType="price" />
              <Chart name={"Predicted Allocations"} data={predictionAllocationData} chartType="allocations" />
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
