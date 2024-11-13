import { getNextDays } from "@/app/utils/date/date";
import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import CustomDateButton from "../button/CustomDateButton";
import { Day } from "@/app/types/date.type";

export default function CustomDateSelector() {
  const [days, setDays] = useState<Array<Day>>([]);

  useEffect(() => {
    const dates = getNextDays(4);
    setDays(dates);
  }, []);

  return (
    <div>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <IconButton>
          <ArrowBackIos />
        </IconButton>
        {days &&
          days.length > 0 &&
          days.map((day) => <CustomDateButton key={day.date} day={day} />)}
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </div>
  );
}
