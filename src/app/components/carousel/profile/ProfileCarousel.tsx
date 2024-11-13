import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Crew } from "@/app/data/crew/data";
import useResponsive from "@/app/hooks/useResponsive";
interface ProfileCarouselProp {
  data: Crew[];
}

const ProfileCarousel: React.FC<ProfileCarouselProp> = ({ data }) => {
  const { showCardCount } = useResponsive(); // 3 :- sm, 2 :- xs

  const content = (
    <>
      {data.map((s, i) => (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          key={i}
          mx={showCardCount === 3 ? 2 : 3}
        >
          <Image
            src={s.image}
            alt={s.name}
            width={130}
            height={130}
            style={{
              borderRadius: "80px",
              height: showCardCount === 3 ? "75px" : "130px",
              width: showCardCount === 3 ? "65px" : "130px",
            }}
          />
          <Typography mt={2}>{s.name}</Typography>
          <Typography variant="body2" fontFamily="serif">
            {s.role}
          </Typography>
        </Box>
      ))}
    </>
  );
  return (
    <>
      {showCardCount === 2 ? (
        <>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            flexDirection={"column"}
          >
            {content}
          </Box>
        </>
      ) : (
        <>{content}</>
      )}
    </>
  );
};

export default ProfileCarousel;
