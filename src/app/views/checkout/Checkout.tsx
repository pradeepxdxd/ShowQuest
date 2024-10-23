import { Box, Grid } from "@mui/material";
import Beverage from "./beverage/Beverage";

const Checkout = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        m={3}
      >
        <Box width={"85%"}>
          <Grid container spacing={1}>
            <Grid
              item
              sm={8}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Beverage />
            </Grid>
            <Grid
              item
              sm={4}
              border={"1px solid blue"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              B
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
