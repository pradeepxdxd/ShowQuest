import { Day } from "@/app/types/date.type";
import { Button } from "@mui/material";
import React from "react";

interface DateButtonType {
  key: number;
  day: Day;
}

const CustomDateButton: React.FC<DateButtonType> = ({ key, day }) => {
  return (
    <>
      <Button
        key={key}
        variant='text'
        color="error"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80px", // Adjust as per your need
          width: "80px", // Adjust as per your need
          textTransform: "none", // To prevent all caps
        }}
      >
        <span style={{ fontSize: "12px" }}>{day.day}</span>
        <span style={{ fontSize: "12px", fontWeight: "bold" }}>{day.date}</span>
        <span style={{ fontSize: "12px" }}>{day.month}</span>
      </Button>
    </>
  );
};

export default CustomDateButton;
