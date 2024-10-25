import { AppDispatch, RootState } from "@/app/store";
import { addProceedToPayCost } from "@/app/store/ui/seat.slice";
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BookingSummaryCard() {
  const [ticketOfShow, setTicketOfShow] = useState<string>("");
  const [finalPayment, setFinalPayment] = useState<number>(0);
  const { totalPrice, foodItems } = useSelector(
    (state: RootState) => state.beverage
  );
  const { totalSeatCost, clientSeats } = useSelector(
    (state: RootState) => state.seat
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (clientSeats.length > 0) {
      let headTitle = "",
        tailTitle = "";
      const ticketAdded: string[] = [];
      for (const ticket of clientSeats) {
        if (ticketAdded.some((val) => val === ticket.seatName)) {
          tailTitle += `/${ticket.seatRow}-${ticket.seatNo}`;
        } else {
          ticketAdded.push(ticket.seatName);
          headTitle += ticket.seatName + "/";
          tailTitle += ticket.seatRow + "-" + ticket.seatNo;
        }
      }
      setTicketOfShow(headTitle + tailTitle);
    }
    setFinalPayment(totalSeatCost + 81 + totalPrice);
    dispatch(addProceedToPayCost(totalSeatCost + 81 + totalPrice));
  }, [clientSeats, dispatch, totalPrice, totalSeatCost]);

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Typography my={3} sx={{ color: "#c02c39", fontSize: "small" }}>
          BOOKING SUMMARY
        </Typography>
        <Grid container>
          <Grid item sm={6}>
            <Typography variant="body2">
              {" "}
              {ticketOfShow}( {clientSeats.length} Ticket )
            </Typography>
          </Grid>
          <Grid
            item
            sm={6}
            display={"flex"}
            justifyContent={"flex-end"}
            width={"100%"}
          >
            <Typography variant="body2"> Rs. {totalSeatCost}</Typography>
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
            <Typography variant="body2"> Rs. 81</Typography>
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
              {foodItems &&
                foodItems.length > 0 &&
                foodItems.map((item) => (
                  <>
                    <Grid item sm={6} mt={1}>
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.name} (Qt. {item.foodCount})
                      </Typography>
                    </Grid>
                    <Grid
                      mt={1}
                      item
                      sm={6}
                      display={"flex"}
                      justifyContent={"flex-end"}
                      width={"100%"}
                    >
                      <Typography variant="caption">
                        Rs.{item.price * item.foodCount}
                      </Typography>
                    </Grid>
                  </>
                ))}
            </>
          )}
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
            <Typography variant="body1">Rs.{finalPayment}</Typography>
          </Grid>
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
              Rs.{finalPayment}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
