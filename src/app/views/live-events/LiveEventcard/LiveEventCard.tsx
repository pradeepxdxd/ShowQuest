'use client'
// import { LiveEventImage } from "@/app/data/live-events/data";
import { ShowResponse } from "@/firebase/actions/action.types";
import { Card, CardMedia } from "@mui/material";
import { useRouter } from "next/navigation";

interface MovieCardProps {
  liveEvent: ShowResponse;
}

const LiveEventCard: React.FC<MovieCardProps> = ({ liveEvent }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`pages/events/${liveEvent.id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 250,
        margin: "auto",
        boxShadow: "none",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        height="300"
        image={liveEvent.image as string}
        alt={"cards"}
        sx={{ borderRadius: 1 }}
      />
    </Card>
  );
};

export default LiveEventCard;
