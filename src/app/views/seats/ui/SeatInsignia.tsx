import useResponsive from "@/app/hooks/useResponsive";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const SeatInsignia: React.FC<{ price: string }> = ({ price }) => {
  const { showCardCount } = useResponsive();
  return (
    <>
      <Box>
        <Typography variant="caption">{price}</Typography>
        <Divider />
        <Box mt={2}>
          <Grid container spacing={1}>
            <Grid item sm={1} xs={0} display={"flex"}>
              SB
            </Grid>
            <Grid item sm={3} xs={3} display={"flex"}>
              <Button
                sx={{
                  mx: showCardCount === 2 || showCardCount === 3 ? 0 : 1,
                  width: "0.5px",
                  height: showCardCount === 2 ? "20px" : "30px",
                  minWidth: 0,
                }}
                variant="outlined"
                color="success"
                disabled
              >
                1
              </Button>
              <Button
                sx={{
                  mx: showCardCount === 2 || showCardCount === 3 ? 0 : 1,
                  width: "0.5px",
                  height: showCardCount === 2 ? "20px" : "30px",
                  minWidth: 0,
                }}
                variant="outlined"
                color="success"
                disabled
              >
                2
              </Button>
            </Grid>
            <Grid item sm={3} xs={3} display={"flex"}>
              <Button
                sx={{
                  mx: showCardCount === 2 || showCardCount === 3 ? 0 : 1,
                  width: "0.5px",
                  height: showCardCount === 2 ? "20px" : "30px",
                  minWidth: 0,
                }}
                variant="outlined"
                color="success"
              >
                3
              </Button>
              <Button
                sx={{
                  mx: showCardCount === 2 || showCardCount === 3 ? 0 : 1,
                  width: "0.5px",
                  height: showCardCount === 2 ? "20px" : "30px",
                  minWidth: 0,
                }}
                variant="outlined"
                color="success"
              >
                4
              </Button>
            </Grid>
            <Grid item sm={3} xs={3} display={"flex"}>
              <Button
                sx={{
                  mx: showCardCount === 2 || showCardCount === 3 ? 0 : 1,
                  width: "0.5px",
                  height: showCardCount === 2 ? "20px" : "30px",
                  minWidth: 0,
                }}
                variant="outlined"
                color="success"
              >
                5
              </Button>
              <Button
                sx={{
                  mx: showCardCount === 2 || showCardCount === 3 ? 0 : 1,
                  width: "0.5px",
                  height: showCardCount === 2 ? "20px" : "30px",
                  minWidth: 0,
                }}
                variant="outlined"
                color="success"
              >
                6
              </Button>
            </Grid>
            <Grid
              item
              sm={2}
              xs={3}
              display={"flex"}
              justifyContent={"end"}
              width={"100%"}
            >
              <Button
                sx={{
                  mx: showCardCount === 2 || showCardCount === 3 ? 0 : 1,
                  width: "0.5px",
                  height: showCardCount === 2 ? "20px" : "30px",
                  minWidth: 0,
                }}
                variant="outlined"
                color="success"
              >
                7
              </Button>
              <Button
                sx={{
                  mx: showCardCount === 2 || showCardCount === 3 ? 0 : 1,
                  width: "0.5px",
                  height: showCardCount === 2 ? "20px" : "30px",
                  minWidth: 0,
                }}
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
};

export default SeatInsignia;
