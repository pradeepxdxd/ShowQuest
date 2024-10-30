'use client'
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { MovieCard } from "@/app/types/movie.type";
import { useRouter } from "next/navigation";

const CustomMovieCard: React.FC<MovieCard> = ({ card }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/pages/movies/${card.id}`)
  };
  return (
    <>
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
          image={card.image?.src}
          alt={card.title}
          sx={{ borderRadius: 1 }}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {card.genre}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default CustomMovieCard;
