"use client";
import { getSeatDetails, getMovies } from "@/service/api/api";
import { useParams } from "next/navigation";
import Title from "./Title";
import { Box, Typography } from "@mui/material";
import SeatInsignia from "./ui/SeatInsignia";
import SeatCard from "./ui/SeatCard";
import { royalSeats, clubSeats, executiveSeats } from "@/app/data/seats/data";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
const SeatsView = () => {

  const { id } = useParams();
  const seatDetails = getSeatDetails(Number(id[0]));
  const movieDetails = getMovies(Number(id[1]));
  const timeDetails = seatDetails.time.filter(
    (seat) => seat.id === Number(id[2])
  )[0];
  return (
    <>
      <Box>
        <Title
          title={movieDetails.title}
          theater={seatDetails}
          time={timeDetails.time}
        />
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
                    sx={{ bgcolor: "gray", color: "gray", fontSize: "18px" }}
                  />
                </span>
                Sold
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SeatsView;
