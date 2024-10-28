import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import posterImage from "@/app/assets/poster/poster.jpeg";

export default function page() {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Image
        src={posterImage}
        alt={"poster"}
        style={{ borderRadius: "10px", cursor: "pointer", maxWidth: "80%" }}
        // width={1200}
      />
    </Box>
  );
}
