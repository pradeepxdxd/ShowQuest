import Carousel from "@/app/components/carousel/fullsize/FullSizeCarousel";
import RecommendedMovies from "../../views/recommended-movies/ReMoviesView";
import Poster from "../../views/poster/PosterView";
import LiveEvents from "@/app/views/live-events/LiveEvents";
import PremiereView from "@/app/views/premiere/PremiereView";
import { Box } from "@mui/material";

const home = () => {
  return (
    <>
      <Carousel />

      <Box sx={{ mt: 3 }}>
        <RecommendedMovies />
      </Box>

      <Box sx={{ mt: 0 }}>
        <Poster />
      </Box>

      <Box sx={{ mt: 5 }}>
        <LiveEvents />
      </Box>

      <Box bgcolor={"rgb(43, 49, 72)"}>
        <PremiereView />
      </Box>
    </>
  );
};

export default home;
