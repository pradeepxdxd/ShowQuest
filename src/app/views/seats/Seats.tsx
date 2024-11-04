"use client";
import React, { useEffect } from "react";
import {
  getSeatDetails,
} from "@/service/api/api";
import { useParams, useRouter } from "next/navigation";
import Title from "./Title";
import { Box, Button, Divider, Typography } from "@mui/material";
import SeatInsignia from "./ui/SeatInsignia";
import SeatCard from "./ui/SeatCard";
import { royalSeats, clubSeats, executiveSeats } from "@/app/data/seats/data";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { addSeatCost, clearSeats } from "@/app/store/ui/seat.slice";
import { clearBeverages, clearTotalPrice } from "@/app/store/ui/beverage.slice";
import { getShowByIdData } from "@/app/store/show/show.slice";

const SeatsView = () => {
  const router = useRouter();
  const { id } = useParams();
  const { totalSeats } = useSelector((state: RootState) => state.seat);
  const { show } = useSelector((state: RootState) => state.show);
  const dispatch = useDispatch<AppDispatch>();

  const seatDetails = getSeatDetails(Number(id[0]));

  const timeDetails = seatDetails.time.filter(
    (seat) => seat.id === Number(id[2])
  )[0];

  useEffect(() => {
    dispatch(getShowByIdData(id[1]));
    dispatch(clearSeats());
    dispatch(clearBeverages());
    dispatch(clearTotalPrice());
  }, [dispatch, id]);

  const handleCheckout = () => {
    dispatch(addSeatCost(totalSeats));
    router.push("/pages/main/checkout");
  };

  return (
    <>
      {show && (
        <Box>
          <Title
            title={show.title}
            theater={seatDetails}
            time={timeDetails.time}
            image={show.image as string}
          />
          <Divider />
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"auto"}
          >
            <Box width={"65vw"}>
              {timeDetails.price &&
                timeDetails.price.length > 0 &&
                timeDetails.price.map((td) => (
                  <Box key={td.id} mt={5}>
                    {td.seatType === "Insignia" ||
                    td.seatType === "Royal Club" ? (
                      <SeatInsignia price={`Rs. ${td.cost} ${td.seatType}`} />
                    ) : (
                      <SeatCard
                        price={`Rs. ${td.cost} ${td.seatType}`}
                        cost={td.cost}
                        seatType={td.seatType}
                        clientSeats={
                          td.seatType === "Royal"
                            ? royalSeats
                            : td.seatType === "CLUB"
                            ? clubSeats
                            : td.seatType === "EXECUTIVE"
                            ? executiveSeats
                            : executiveSeats
                        }
                      />
                    )}
                  </Box>
                ))}
              <Box
                mt={7}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
              >
                <Typography>Screen Icon</Typography>
                <Typography variant="caption">
                  All Eyes This way please!
                </Typography>
              </Box>
              <Box
                mt={7}
                mb={2}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography mx={3}>
                  <span style={{ margin: "0px 4px" }}>
                    <CheckBoxOutlineBlankIcon sx={{ color: "orange" }} />
                  </span>
                  Bestseller
                </Typography>
                <Typography mx={3}>
                  <span style={{ margin: "0px 4px" }}>
                    <CheckBoxOutlineBlankIcon sx={{ color: "gray" }} />
                  </span>
                  Available
                </Typography>
                <Typography mx={3}>
                  <span style={{ margin: "0px 4px" }}>
                    <CheckBoxOutlineBlankIcon
                      sx={{
                        bgcolor: "#0ed20e",
                        color: "#0ed20e",
                        fontSize: "18px",
                      }}
                    />
                  </span>
                  Selected
                </Typography>
                <Typography mx={3}>
                  <span style={{ margin: "0px 4px" }}>
                    <CheckBoxOutlineBlankIcon
                      sx={{
                        bgcolor: "#ebebeb",
                        color: "#ebebeb",
                        fontSize: "18px",
                      }}
                    />
                  </span>
                  Sold
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      {totalSeats > 0 && (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          height={75}
          sx={{ bgcolor: "#f5f5f5" }}
          position={"sticky"}
          bottom={0} // Make sure to define bottom for sticky
          zIndex={1000} // Ensure it is above other elements
        >
          <Box>
            <Button
              variant="contained"
              color="error"
              sx={{ width: "26vw" }}
              onClick={handleCheckout}
            >
              Pay Rs.{totalSeats}
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SeatsView;
