import { useEffect, useState } from "react";
import { Theater } from "@/app/data/theater/data";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBackIosNewSharp } from "@mui/icons-material";
import { getNextDays } from "@/app/utils/date/date";
import { useRouter } from "next/navigation";

interface TitleType {
  title: string;
  theater: Theater;
  time: string;
}

const Title: React.FC<TitleType> = ({ title, theater, time }) => {
  const [date, setDate] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const day = getNextDays(1)[0];
    setDate(`${day.day}, ${(day.date, " ", day.month)}`);
  }, []);

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
