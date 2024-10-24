import { RootState } from "@/app/store";
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function BookingSummaryCard() {
  const { totalPrice, foodItems } = useSelector(
    (state: RootState) => state.beverage
  );

  console.log({ foodItems });
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Typography my={3} sx={{ color: "#c02c39", fontSize: "small" }}>
          BOOKING SUMMARY
        </Typography>
        <Grid container>
          <Grid item sm={6}>
            <Typography variant="body2"> 4C-B6 ( 1 Ticket )</Typography>
          </Grid>
          <Grid
            item
            sm={6}
            display={"flex"}
            justifyContent={"flex-end"}
            width={"100%"}
          >
            <Typography variant="body2"> Rs. 690.00</Typography>
          </Grid>
          <Grid item sm={6} mt={2}>
            <Typography variant="caption"> Convenience fees</Typography>
          </Grid>
          <Grid
            item
            sm={6}
            display={"flex"}
            justifyContent={"flex-end"}
            width={"100%"}
            mt={2}
          >
            <Typography variant="body2"> Rs. 81.42</Typography>
          </Grid>
          <Grid item sm={12} my={2}>
            <Divider />
          </Grid>
          <Grid item sm={6}>
            <Typography variant="body1">Sub total</Typography>
          </Grid>
          <Grid
            item
            sm={6}
            display={"flex"}
            justifyContent={"flex-end"}
            width={"100%"}
          >
            <Typography variant="body1">Rs.771.42</Typography>
          </Grid>
          {totalPrice > 0 && (
            <>
              <Grid item sm={12} my={2}>
                <Divider />
              </Grid>
              <Grid item sm={6}>
                <Typography variant="body1">Food & Beverage</Typography>
              </Grid>
              <Grid
                item
                sm={6}
                display={"flex"}
                justifyContent={"flex-end"}
                width={"100%"}
              >
                <Typography variant="body1">Rs.{totalPrice}</Typography>
              </Grid>
            </>
          )}
        </Grid>
      </CardContent>
      <CardActions
        sx={{ bgcolor: "#fffdc8", display: "flex", justifyContent: "center" }}
      >
        <Grid container mt={2} width={"95%"}>
          <Grid item sm={6}>
            <Typography variant="body1" mb={2}>
              {" "}
              Amount Payable
            </Typography>
          </Grid>
          <Grid
            item
            sm={6}
            display={"flex"}
            justifyContent={"flex-end"}
            width={"100%"}
          >
            <Typography variant="body1" mb={2}>
              {" "}
              Rs.771.42
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
