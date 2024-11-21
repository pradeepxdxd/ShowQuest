"use client";
import { ShowResponse } from "@/firebase/actions/action.types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface MovieCardProps {
  movie: ShowResponse;
  type?: "premiere" | "movie";
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, type }) => {
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
        border: type === "premiere" ? "1px solid rgb(43, 49, 72)" : "none",
      }}
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        height="300"
        image={movie.image as string}
        alt={movie.title}
        sx={{
          borderRadius: 1,
          height: "revert-layer",
        }}
      />
      <CardContent
        style={{
          backgroundColor: type === "premiere" ? "rgb(43, 49, 72)" : "white",
          color: type === "premiere" ? "whitesmoke" : "black",
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          {movie?.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ color: type === "premiere" ? "whitesmoke" : "black" }}
        >
          {movie?.genre &&
            movie?.genre?.length > 0 &&
            movie?.genre?.join(" / ")}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
