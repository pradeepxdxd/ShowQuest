import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";

export default function SeatInsignia() {
  return (
    <>
      <Box>
        <Typography variant="caption">Rs. 740 Royale Recliners</Typography>
        <Divider />
        <Box mt={2}>
          <Grid container spacing={1}>
            <Grid item sm={1} display={"flex"}>
              SB
            </Grid>
            <Grid item sm={3} display={"flex"}>
              <Button
                sx={{ mx: 1, width: "0.5px", height: "30px", minWidth: 0 }}
                variant="outlined"
                color="success"
                disabled
              >
                1
              </Button>
              <Button
                sx={{ mx: 1, width: "0.5px", height: "30px", minWidth: 0 }}
                variant="outlined"
                color="success"
                disabled
              >
                2
              </Button>
            </Grid>
            <Grid item sm={3} display={"flex"}>
              <Button
                sx={{ mx: 1, width: "0.5px", height: "30px", minWidth: 0 }}
                variant="outlined"
                color="success"
              >
                3
              </Button>
              <Button
                sx={{ mx: 1, width: "0.5px", height: "30px", minWidth: 0 }}
                variant="outlined"
                color="success"
              >
                4
              </Button>
            </Grid>
            <Grid item sm={3} display={"flex"}>
              <Button
                sx={{ mx: 1, width: "0.5px", height: "30px", minWidth: 0 }}
                variant="outlined"
                color="success"
              >
                5
              </Button>
              <Button
                sx={{ mx: 1, width: "0.5px", height: "30px", minWidth: 0 }}
                variant="outlined"
                color="success"
              >
                6
              </Button>
            </Grid>
            <Grid item sm={2} display={"flex"} justifyContent={'end'} width={'100%'}>
              <Button
                sx={{ mx: 1, width: "0.5px", height: "30px", minWidth: 0 }}
                variant="outlined"
                color="success"
              >
                7
              </Button>
              <Button
                sx={{ mx: 1, width: "0.5px", height: "30px", minWidth: 0 }}
                variant="outlined"
                color="success"
              >
                8
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
