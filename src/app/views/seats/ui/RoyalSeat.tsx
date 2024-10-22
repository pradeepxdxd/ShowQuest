import React from "react";

import { Button, Grid } from "@mui/material";

export default function RoyalSeat({clientSeats}) {
  return (
    <>
      {clientSeats.map((seat) => (
        <React.Fragment key={seat.id}>
          <Grid item sm={1}>
            {seat.id}
          </Grid>
          <Grid item sm={2.5} display={"flex"}>
            {seat.left.length > 0 &&
              seat.left.map((st) => (
                <Button
                  key={st}
                  sx={{
                    mx: "1px",
                    width: "0.5px",
                    height: "30px",
                    minWidth: 0,
                  }}
                  variant="outlined"
                  color="success"
                >
                  {st}
                </Button>
              ))}
          </Grid>
          <Grid item sm={6} display={"flex"}>
            {seat.middle.length > 0 &&
              seat.middle.map((st) => (
                <Button
                  key={st}
                  sx={{
                    mx: "1px",
                    width: "0.5px",
                    height: "30px",
                    minWidth: 0,
                  }}
                  variant="outlined"
                  color="success"
                >
                  {st}
                </Button>
              ))}
          </Grid>
          <Grid
            item
            sm={2.5}
            display={"flex"}
            justifyContent={"end"}
            sx={{ width: "100%" }}
          >
            {seat.right.length > 0 &&
              seat.right.map((st) => (
                <Button
                  key={st}
                  sx={{
                    mx: "1px",
                    width: "0.5px",
                    height: "30px",
                    minWidth: 0,
                  }}
                  variant="outlined"
                  color="success"
                >
                  {st}
                </Button>
              ))}
          </Grid>
        </React.Fragment>
      ))}
    </>
  );
}
