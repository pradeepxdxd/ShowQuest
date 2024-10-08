import { Grid } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { LiveEventImage } from "@/app/data/live-events/data";
import LiveEventCard from "@/app/views/live-events/LiveEventcard/page";

interface LiveEvents {
  liveEvent: LiveEventImage[];
}

const CardCarousel: React.FC<LiveEvents> = ({ liveEvent }) => {
  return (
    <Carousel
      navButtonsAlwaysVisible
      indicators={false}
      autoPlay={false}
      sx={{ maxWidth: "100%" }}
    >
      {Array.from({ length: Math.ceil(liveEvent.length / 5) }).map(
        (_, index) => (
          <Grid container justifyContent="center" spacing={2} key={index}>
            {liveEvent.slice(index * 5, index * 5 + 5).map((movie, i) => (
              <Grid item xs={6} sm={4} md={2.4} key={i}>
                <LiveEventCard liveEvent={movie} />
              </Grid>
            ))}
          </Grid>
        )
      )}
    </Carousel>
  );
};

export default CardCarousel;
