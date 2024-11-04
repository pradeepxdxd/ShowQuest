"use client";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { ShowResponse } from "@/firebase/actions/action.types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { deleteShowData } from "@/app/store/show/show.slice";
import { Delete, Edit } from "@mui/icons-material";

interface CustomMovieCardProps {
  card: ShowResponse;
  userPayload: { id: string; role: string };
}

const CustomMovieCard: React.FC<CustomMovieCardProps> = ({
  card,
  userPayload,
}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    router.push(`/pages/movies/${card.id}`);
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteShowData(card.id));
  };
  const handleEdit = (e) => {
    e.stopPropagation();
    router.push(`/pages/admin/add-movies/${card.id}`);
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
          image={card.image as string}
          alt={card.title}
          sx={{
            borderRadius: 1,
          }}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {card.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {card.genre?.join(" / ")}
          </Typography>
        </CardContent>
        {userPayload &&
          typeof userPayload?.role === "string" &&
          userPayload?.role === "ADMIN" && (
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <IconButton onClick={handleEdit}>
                <Edit color="info" />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <Delete color="error" />
              </IconButton>
            </CardActions>
          )}
      </Card>
    </>
  );
};

export default CustomMovieCard;
