import Carousel from "@/app/components/carousel/fullsize/page";
import RecommendedMovies from "../../views/recommended-movies/page";
import Poster from "../../views/poster/page";
import LiveEvents from "@/app/views/live-events/page";
import Premiere from '@/app/views/premiere/page'
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

      <Box bgcolor={'rgb(43, 49, 72)'}>
        <Premiere />
      </Box>
    </>
  );
};

export default home;

