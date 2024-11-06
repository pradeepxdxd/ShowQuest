import { Grid } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import LiveEventCard from "@/app/views/live-events/LiveEventcard/LiveEventCard";
import { ShowResponse } from "@/firebase/actions/action.types";
import SkeletonCard from "../../skeleton/Skeleton";

interface LiveEvents {
  liveEvent: ShowResponse[];
  loading?: boolean;
}

const CardCarousel: React.FC<LiveEvents> = ({ liveEvent, loading = true }) => {
  return !liveEvent || liveEvent.length === 0 || loading ? (
    <>
      <Carousel indicators={false} autoPlay={false} sx={{ maxWidth: "100%" }}>
        <Grid container direction="row" justifyContent="center" spacing={3}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Grid item xs={6} sm={4} md={2.4} key={i}>
              <SkeletonCard />
            </Grid>
          ))}
        </Grid>
      </Carousel>
    </>
  ) : (
    <>
      <Carousel
        navButtonsAlwaysVisible
        indicators={true}
        autoPlay={true}
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
    </>
  );
};

export default CardCarousel;
