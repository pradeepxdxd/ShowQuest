"use client";
import React from "react";
import Image from "next/image";
import { Grid, Typography, Button, Box, Chip } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { setOpen } from "@/app/store/ui/authModal.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { ShowResponse } from "@/firebase/actions/action.types";
import useResponsive from "@/app/hooks/useResponsive";

interface MovieDetailsProp {
  data: ShowResponse;
}

const Poster: React.FC<MovieDetailsProp> = ({ data }) => {
  const { showCardCount } = useResponsive();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const user = useAuth();
  
  const handleClick = () => {
    if (user) {
      router.push(`/pages/main/booking/${data.type}/${data.title}/${data.id}`);
    } else dispatch(setOpen());
  };

  return (
    <Box
      sx={{
        position: "relative",
        padding: "20px",
        backgroundColor: "#181818",
        color: "#fff",
        height: "450px",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Opacity */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          opacity: 0.2, // Faded effect
          backgroundImage: `url(${data.image})`, // Use the movie poster as background
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px)", // Optional: Apply a blur to the background
        }}
      />

      <Grid container spacing={3} sx={{ position: "relative", zIndex: 1 }}>
        {/* Movie Poster Section */}
        <Grid item xs={3} sm={3} md={3}>
          <Box sx={{ position: "relative" }}>
            <Image
              src={data.image as string}
              alt="Dharmaveer"
              style={{
                top:showCardCount === 3 ? 60 : showCardCount === 2 ? 110 : 0,
                position: "absolute",
                // width: "70%",
                borderRadius: "10px",
                right: 0,
              }}
              width={300}
              height={450}
            />
          </Box>
        </Grid>

        {/* Movie Details Section */}
        <Grid item xs={8} sm={8} md={8}>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", mt: 10 }}
          >
            <Typography
              variant={
                showCardCount === 3
                  ? "h5"
                  : showCardCount === 2
                  ? "h6"
                  : "h4"
              }
            >
              {data.title}
            </Typography>
            <Button
              startIcon={<ShareIcon />}
              sx={{ color: "#fff", borderRadius: "5px" }}
            >
              Share
            </Button>
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Chip
              icon={<StarIcon />}
              label={`${data.rating} / 10 (${data.votes}K votes)`}
              sx={{
                backgroundColor: "#333",
                color: "#fff",
                marginRight: "10px",
              }}
            />
            <Button
              variant="outlined"
              sx={{ color: "#fff", borderColor: "#fff" }}
              onClick={handleClick}
            >
              Rate now
            </Button>
          </Box>

          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <Chip
              label="2D"
              sx={{
                backgroundColor: "#333",
                color: "#fff",
                marginRight: "5px",
              }}
            />
            <Chip
              label="Marathi, Hindi"
              sx={{ backgroundColor: "#333", color: "#fff" }}
            />
          </Box>

          <Typography sx={{ marginTop: "10px" }}>
            2h 37m • {data.genre?.join(" / ")} • UA • 27 Sep, 2024
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ff3d71",
              color: "#fff",
              marginTop: "20px",
              padding: "10px 20px",
            }}
            onClick={handleClick}
          >
            Book tickets
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Poster;
