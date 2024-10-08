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
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function page() {
  return (
    <Box bgcolor={"#333"}>
      <Box display="flex" alignItems="center" pt={3}>
        <Divider sx={{ flexGrow: 1, borderColor: "gray" }} />
        <Typography variant="h6" color={"white"} fontFamily={inter.style.fontFamily} fontWeight={'small'}>
          book<i style={{ color: "red" }}>my</i>show
        </Typography>
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
          Copyright 2023{" "}
          <span>
            <Copyright />
          </span>{" "}
          Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </Typography>
        <Typography variant="caption" color="gray" textAlign="center" width={'95%'}>
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
