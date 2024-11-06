"use client";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import premiereBannarImage from "@/app/assets/premiere/premiere-banner.jpg";
// import { premiereData } from "@/app/data/premiere/data";
import Carousel from "react-material-ui-carousel";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { getHomeShowByTypeData } from "@/app/store/show/show.slice";

export default function PremiereView() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { homePremiere } = useSelector((state: RootState) => state.show);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getHomeShowByTypeData("premiere"));
  }, [dispatch]);

  const handleClick = (id: string) => {
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
          indicators={false}
          sx={{ width: "85%" }} // Adjust carousel width to fit all cards
        >
          <Box display="flex" justifyContent="center">
            {homePremiere &&
              homePremiere.length > 0 &&
              homePremiere?.map((ele) => (
                <Card
                  key={ele.title}
                  sx={{
                    maxWidth: 250,
                    margin: "0 10px",
                    bgcolor: "rgb(43, 49, 72)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleClick(ele.id as string)}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    image={ele.image as string}
                    alt={"cards"}
                    sx={{ borderRadius: 1 }}
                  />
                  <CardContent sx={{ bgcolor: "rgb(43, 49, 72)" }}>
                    <Typography color="white">{ele.title}</Typography>
                    <Typography mt={1} color="white">
                      Hindi / English
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
