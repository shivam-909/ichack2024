import { Container, CssBaseline, Drawer, Grid, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { BarChart } from "@mui/x-charts/BarChart";
import Dropdown from "./components/Dropdown";
import Chart from "./components/Chart";
import EntryAdder from "./components/EntryAdder";
import Entries from "./components/Entries";
import { useState } from "react";
import DrawerContent from "./components/DrawerContent";
import { useEffect } from "react";

function App() {
  const [filterProperties, setFilterProperties] = useState({
    region: "NA",
    sector: "Technology",
  });

  const [showAnalysis, setShowAnalysis] = useState(false);

  const [historyPriceData, sethistoryPriceData] = useState();

  const [historyAllocationData, sethistoryAllocationData] = useState();

  const [predictionPriceData, setpredictionPriceData] = useState();

  const [predictionAllocationData, setpredictionAllocationData] = useState();

  const [analysisData, setAnalysisData] = useState({});

  const [loading, setLoading] = useState([]);

  const fetchAllData = () => {
    setLoading(["history", "prediction", "analysis"]);
    fetch("http://localhost:3000/prediction")
      .then((response) => response.json())
      .then((data) => {
        console.log("RESPONSE", data);
        setpredictionPriceData(data["priceChart"]["predictions"]);
        setpredictionAllocationData(data["allocationChart"]);
        setLoading((prev) => prev.filter((item) => item !== "prediction"));
      }).catch((error) => {
        console.error('Error:', error);
      });

    fetch("http://localhost:3000/history")
      .then((response) => response.json())
      .then((data) => {
        console.log("HISTORY ALLOCATIONS", data["historyAllocations"]);
        sethistoryPriceData(data["historyPrice"]);
        sethistoryAllocationData(data["historyEmissions"]);
        setLoading((prev) => prev.filter((item) => item !== "history"));
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
        <Grid container spacing={20} mt={1}>
          <Grid xs={6}>
            <Stack>
              <Chart data={historyPriceData} name={"Historical Prices"} chartType="price" />
              <Chart data={historyAllocationData} name={"Historical Allocations"} chartType="allocation" />
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
