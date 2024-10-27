import { useEffect, useState } from "react";
import { Theater } from "@/app/data/theater/data";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBackIosNewSharp } from "@mui/icons-material";
import { getNextDays } from "@/app/utils/date/date";
import { useRouter } from "next/navigation";
import { setTheaterDetails } from "@/app/store/ui/seat.slice";
import useDispatchHook from "@/app/hooks/useDispatchHook";
import { StaticImageData } from "next/image";

interface TitleType {
  title: string;
  theater: Theater;
  time: string;
  image: string | StaticImageData;
}

const Title: React.FC<TitleType> = ({ title, theater, time, image }) => {
  const [date, setDate] = useState<string>("");
  const router = useRouter();
  const { handler } = useDispatchHook();

  useEffect(() => {
    const day = getNextDays(1)[0];
    setDate(`${day.day}, ${day.date} ${day.month}`);

    handler(setTheaterDetails, {
      theaterName: theater.name,
      timing: `${day.day}, ${day.date} ${day.month}`,
      showName: title,
      image,
    });
  }, [handler, image, theater, title]);

  return (
    <>
      <Box display={"flex"} sx={{ m: 2 }}>
        <Box>
          <IconButton onClick={() => router.back()}>
            <ArrowBackIosNewSharp />
          </IconButton>
        </Box>
        <Box display={"flex"} flexDirection={"column"} sx={{ ml: 1 }}>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="caption" fontWeight={"normal"}>
            {theater.name} | {date}, {time}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Title;
