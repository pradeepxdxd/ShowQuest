import React, { useRef } from "react";
import { Button, Grid } from "@mui/material";
import { Seat } from "@/app/data/seats/data";
import { getRandomNumber } from "@/app/utils/random/random";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { addClientSeatDetails, addSeat } from "@/app/store/ui/seat.slice";

interface RoyalSeatType {
  clientSeats: Seat[];
  cost: number;
  seatType: string;
}

const RoyalSeat: React.FC<RoyalSeatType> = ({
  clientSeats,
  cost,
  seatType,
}) => {
  const buttonsRef = useRef<{
    [key: string | number]: HTMLButtonElement | null;
  }>({});
  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = (
    st_key: string | number,
    st_seatNo: string | number,
    seatRow: string
  ) => {
    const button = buttonsRef.current[st_key];
    if (button) {
      dispatch(addSeat(cost));
      dispatch(
        addClientSeatDetails({ seatName: seatType, seatNo: st_seatNo, seatRow })
      );
      button.style.backgroundColor = "#6cd134";
      button.style.color = "white";
    }
  };

  return (
    <>
      {clientSeats.map((seat) => (
        <React.Fragment key={seat.id}>
          <Grid item sm={1}>
            {seat.id}
          </Grid>
          <Grid item sm={2.5} display={"flex"}>
            {seat.left.length > 0 &&
              seat.left.map((st) => {
                const isDisabled = getRandomNumber() === 1;
                return (
                  <Button
                    key={st.key}
                    // ref={(el) => (buttonsRef.current[st.key] = el)}
                    ref={(el) => {
                      if (el) {
                        buttonsRef.current[st.key] = el;
                      }
                    }}
                    sx={{
                      mx: "1px",
                      width: "0.5px",
                      height: "30px",
                      minWidth: 0,
                      backgroundColor: "transparent",
                    }}
                    variant="outlined"
                    color={getRandomNumber() === 2 ? "warning" : "success"}
                    disabled={isDisabled}
                    onClick={() => handleButtonClick(st.key, st.value, seat.id)}
                  >
                    {st.value}
                  </Button>
                );
              })}
          </Grid>
          <Grid item sm={6} display={"flex"}>
            {seat.middle.length > 0 &&
              seat.middle.map((st) => {
                const isDisabled = getRandomNumber() === 1;
                return (
                  <Button
                    key={st.key}
                    // ref={(el) => (buttonsRef.current[st.key] = el)}
                    ref={(el) => {
                      if (el) {
                        buttonsRef.current[st.key] = el;
                      }
                    }}
                    sx={{
                      mx: "1px",
                      width: "0.5px",
                      height: "30px",
                      minWidth: 0,
                      backgroundColor: "transparent",
                    }}
                    variant="outlined"
                    color={getRandomNumber() === 2 ? "warning" : "success"}
                    disabled={isDisabled}
                    onClick={() => handleButtonClick(st.key, st.value, seat.id)}
                  >
                    {st.value}
                  </Button>
                );
              })}
          </Grid>
          <Grid
            item
            sm={2.5}
            display={"flex"}
            justifyContent={"end"}
            sx={{ width: "100%" }}
          >
            {seat.right.length > 0 &&
              seat.right.map((st) => {
                const isDisabled = getRandomNumber() === 1;
                return (
                  <Button
                    key={st.key}
                    // ref={(el) => (buttonsRef.current[st.key] = el)}
                    ref={(el) => {
                      if (el) {
                        buttonsRef.current[st.key] = el;
                      }
                    }}
                    sx={{
                      mx: "1px",
                      width: "0.5px",
                      height: "30px",
                      minWidth: 0,
                      backgroundColor: "transparent",
                    }}
                    variant="outlined"
                    color={getRandomNumber() === 2 ? "warning" : "success"}
                    disabled={isDisabled}
                    onClick={() => handleButtonClick(st.key, st.value, seat.id)}
                  >
                    {st.value}
                  </Button>
                );
              })}
          </Grid>
        </React.Fragment>
      ))}
    </>
  );
};

export default RoyalSeat;
