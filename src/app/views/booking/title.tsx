import CustomChip from "@/app/components/chip/page";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

interface TitleProp {
  title: string;
  genre: string;
  id: number;
}

const Title: React.FC<TitleProp> = ({ title, genre, id }) => {
  const router = useRouter();
  const handleBack = () => {
    router.push(`/pages/movies/${id}`);
  };
  return (
    <>
      <div onClick={handleBack}>
        <Typography variant="h4" sx={{ cursor: "pointer" }}>
          {title} (3D/IMAX/HD/PVR) - English or Hindi
        </Typography>
      </div>
      <div style={{ marginTop: 6 }}>
        <CustomChip labels={genre.split("/")} />
      </div>
    </>
  );
};

export default Title;
