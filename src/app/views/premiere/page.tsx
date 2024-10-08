"use client";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import premiereBannarImage from "@/app/assets/premiere/premiere-banner.jpg";
import { premiereData } from "@/app/data/premiere/data";
import Carousel from "react-material-ui-carousel";
import { useRouter } from "next/navigation";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`pages/premiere/${id}`);
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Image src={premiereBannarImage} alt="premiere-banner" width={1300} />
      </Box>
      <Box mt={3} ml={16}>
        <Typography color="white" variant="h5" fontWeight={"bold"}>
          Premieres
        </Typography>
        <Typography color="white" variant="body2" fontWeight={"small"}>
          Brand new releases every Friday
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={1}
        width="100%"
      >
        <Carousel
          autoPlay={false}
          navButtonsAlwaysVisible={true}
          indicators={false}
          sx={{ width: "85%" }} // Adjust carousel width to fit all cards
        >
          <Box display="flex" justifyContent="center">
            {premiereData?.map((ele) => (
              <Card
                key={ele.title}
                sx={{
                  maxWidth: 250,
                  margin: "0 10px",
                  bgcolor: "rgb(43, 49, 72)",
                  cursor: "pointer",
                }}
                onClick={() => handleClick(ele.id)}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={ele.image?.src}
                  alt={"cards"}
                  sx={{ borderRadius: 1 }}
                />
                <CardContent sx={{ bgcolor: "rgb(43, 49, 72)" }}>
                  <Typography color="white">{ele.title}</Typography>
                  <Typography mt={1} color="white">
                    {ele.language}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Carousel>
      </Box>
    </>
  );
}
