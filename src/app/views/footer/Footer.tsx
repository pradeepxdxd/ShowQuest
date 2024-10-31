'use client'
import React from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import {
  Facebook,
  X,
  Instagram,
  YouTube,
  Pinterest,
  LinkedIn,
  Copyright,
} from "@mui/icons-material";
import Image from "next/image";
import showQuestImage from "@/app/assets/nav/show-quest-main-logo.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <Box bgcolor={"#333"} sx={{ maxWidth: "100%" }}>
      <Box display="flex" alignItems="center" pt={3}>
        <Divider sx={{ flexGrow: 1, borderColor: "gray" }} />
        <Image
          style={{ cursor: "pointer" }}
          onClick={handleClick}
          src={showQuestImage}
          alt={"show-quest"}
          width={100}
          height={20}
        />
        <Divider sx={{ flexGrow: 1, borderColor: "gray" }} />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={2}
      >
        <IconButton>
          <Facebook
            sx={{ bgcolor: "gray", borderRadius: "20px", fontSize: "35px" }}
          />
        </IconButton>
        <IconButton>
          <X sx={{ bgcolor: "gray", borderRadius: "20px", fontSize: "35px" }} />
        </IconButton>
        <IconButton>
          <Instagram
            sx={{ bgcolor: "gray", borderRadius: "20px", fontSize: "35px" }}
          />
        </IconButton>
        <IconButton>
          <YouTube
            sx={{ bgcolor: "gray", borderRadius: "20px", fontSize: "35px" }}
          />
        </IconButton>
        <IconButton>
          <Pinterest
            sx={{ bgcolor: "gray", borderRadius: "20px", fontSize: "35px" }}
          />
        </IconButton>
        <IconButton>
          <LinkedIn
            sx={{ bgcolor: "gray", borderRadius: "20px", fontSize: "35px" }}
          />
        </IconButton>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={2}
        flexDirection="column"
        height={100}
      >
        <Typography variant="caption" color="gray" textAlign="center">
          Copyright 2024{" "}
          <span>
            <Copyright />
          </span>{" "}
          <Link href={'https://pradeepbiswas.vercel.app'} target="_blank" >Pradeep Biswas</Link> All Rights Reserved.
        </Typography>
        <Typography
          variant="caption"
          color="gray"
          textAlign="center"
          width={"95%"}
        >
          The content and images used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied. Unauthorized use is
          prohibited and punishable by law.
        </Typography>
      </Box>
    </Box>
  );
}
