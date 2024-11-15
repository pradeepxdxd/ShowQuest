"use client";
import React, { useEffect } from "react";
import { getSeatDetails } from "@/service/api/api";
import { useParams, useRouter } from "next/navigation";
import Title from "./Title";
import { Box, Button, Divider, Typography } from "@mui/material";
import SeatCard from "./ui/SeatCard";
import {
  royalSeats,
  clubSeats,
  executiveSeats,
  insigniaSeats,
} from "@/app/data/seats/data";
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
          <Box mt={5} overflow="auto" display="flex" justifyContent="center">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              sx={{
                padding: "0 10px",
                overflowX: "auto",
                minWidth: "80vw", // Ensure it takes the full width
                maxWidth: "80%",
              }}
            >
              {timeDetails.price &&
                timeDetails.price.length > 0 &&
                timeDetails.price.map((td) => (
                  <Box
                    key={td.id}
                    sx={{ overflowX: "auto" }}
                    minWidth="100%"
                    mt={2}
                  >
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
                          : td.seatType === "Insignia" ||
                            td.seatType === "Royal Club"
                          ? insigniaSeats
                          : insigniaSeats
                      }
                    />
                  </Box>
                ))}
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt={5}
              >
                <Box
                  sx={{
                    width: 200,
                    height: 20,
                    bgcolor: "#e3f2fd",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "4px",
                    transform: "perspective(500px) rotateX(10deg)",
                    border: "1px solid #bbdefb",
                    marginBottom: 2,
                  }}
                />
                <Typography variant="caption" color="textSecondary">
                  Here&apos;s the Screen, All eyes this way please!
                </Typography>
              </Box>
              <Box
                mt={7}
                mb={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
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
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height={75}
          sx={{ bgcolor: "#f5f5f5" }}
          position="sticky"
          bottom={0}
          zIndex={1000}
        >
          <Button
            variant="contained"
            color="error"
            sx={{ width: "26vw" }}
            onClick={handleCheckout}
          >
            Pay Rs.{totalSeats}
          </Button>
        </Box>
      )}
    </>
  );
};

export default SeatsView;
