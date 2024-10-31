import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Crew } from "@/app/data/crew/data";
interface ProfileCarouselProp {
  data: Crew[];
}

const ProfileCarousel: React.FC<ProfileCarouselProp> = ({ data }) => {
  return (
    <>
      {data.map((s, i) => (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          key={i}
          mx={3}
        >
          <Image
            src={s.image}
            alt={s.name}
            width={130}
            height={130}
            style={{ borderRadius: "80px", height: "130px", width: "130px" }}
          />
          <Typography mt={2}>{s.name}</Typography>
          <Typography variant="body2" fontFamily='serif'>{s.role}</Typography>
        </Box>
      ))}
    </>
  );
};

export default ProfileCarousel;
