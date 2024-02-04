import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import sat1 from "../images/sat1.png";
import sat2 from "../images/sat2.png";
import sat3 from "../images/sat3.png";

const SatelliteImage = ({ image, setFocusedImage }) => {
  return (
    <Box padding={1}>
      <Card sx={{ maxWidth: 345, borderRadius: "20px" }} margin={3}>
        <CardActionArea onClick={() => setFocusedImage(image)}>
          <CardMedia component="img" image={image} alt="Descriptive Alt Text" />
        </CardActionArea>

        {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Card Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Your text here
        </Typography>
      </CardContent> */}
      </Card>
    </Box>
  );
};

const SatelliteFocusedImage = ({ image, cars, name }) => {
  return (
    <Box width={"250px"}>
      <Typography variant="h6">Image-28518134</Typography>
      <Stack direction="row">
        <SatelliteImage image={image} />
        <Box>
          <Typography>- 2 cars detected</Typography>
          <Typography>- (0.65, 0.64)</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

const SatelliteView = () => {
  const [focusedImage, setFocusedImage] = useState(sat1);

  return (
    <Box>
      <Typography variant="h5">Satellite Image Analysis</Typography>
      <Grid container>
        <Grid xs={4}>
          <SatelliteImage image={sat1} setFocusedImage={setFocusedImage} />
          <SatelliteImage image={sat3} setFocusedImage={setFocusedImage} />
        </Grid>
        <Grid xs={4}>
          <SatelliteImage image={sat2} setFocusedImage={setFocusedImage} />
          <SatelliteImage image={sat1} setFocusedImage={setFocusedImage} />
        </Grid>
        <Grid xs={4}>
          <SatelliteImage image={sat3} setFocusedImage={setFocusedImage} />
          <SatelliteImage image={sat2} setFocusedImage={setFocusedImage} />
        </Grid>
        `
      </Grid>
      <SatelliteFocusedImage image={focusedImage} />
    </Box>
  );
};

export default SatelliteView;
