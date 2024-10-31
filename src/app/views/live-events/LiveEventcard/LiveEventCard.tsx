'use client'
import { LiveEventImage } from "@/app/data/live-events/data";
import { Card, CardMedia } from "@mui/material";
import { useRouter } from "next/navigation";

interface MovieCardProps {
  liveEvent: LiveEventImage;
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
        image={liveEvent.image?.src}
        alt={"cards"}
        sx={{ borderRadius: 1 }}
      />
    </Card>
  );
};

export default LiveEventCard;
