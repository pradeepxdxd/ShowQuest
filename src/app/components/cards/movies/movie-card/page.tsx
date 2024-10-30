"use client";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";

interface Movie {
  id: number;
  title: string;
  image: StaticImageData;
  rating: string;
  votes: string;
  genre: string;
  type: string;
}

interface MovieCardProp {
  card: Movie;
}

const CustomMovieCard: React.FC<MovieCardProp> = ({ card }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/pages/movies/${card.id}`);
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
