"use client";
import { ShowResponse } from "@/firebase/actions/action.types";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface MovieCardProps {
  movie: ShowResponse;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/pages/movies/${movie.id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: "auto",
        boxShadow: "none",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        height="300"
        image={movie.image as string}
        alt={movie.title}
        sx={{ borderRadius: 1 }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {movie?.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {movie?.genre?.join(" / ")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
