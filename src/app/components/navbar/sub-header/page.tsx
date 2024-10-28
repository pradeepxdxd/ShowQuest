"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";

export default function PrimarySearchAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1, maxWidth:'100%'  }}>
        <AppBar position="static" color="default">
          <Toolbar
            sx={{
              minHeight: "40px !important",
            }}
          >
            <Box sx={{ flexGrow: 0.1 }} />
            <Box>
              <Link
                style={{ marginRight: 20, fontSize: "90%" }}
                href={"/pages/movies"}
              >
                Movies
              </Link>
              <Link
                style={{ marginRight: 20, fontSize: "90%" }}
                href={"/pages/streams"}
              >
                Stream
              </Link>
              <Link
                style={{ marginRight: 20, fontSize: "90%" }}
                href={"/pages/events"}
              >
                Events
              </Link>
              <Link
                style={{ marginRight: 20, fontSize: "90%" }}
                href={"/pages/plays"}
              >
                plays
              </Link>
              <Link
                style={{ marginRight: 20, fontSize: "90%" }}
                href={"/pages/sports"}
              >
                Sports
              </Link>
              <Link
                style={{ marginRight: 20, fontSize: "90%" }}
                href={"/pages/activities"}
              >
                Activities
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0.7 }} />
            <Box>
              <Link style={{ marginRight: 20, fontSize: "80%" }} href={"#"}>
                ListYourShow
              </Link>
              <Link style={{ marginRight: 20, fontSize: "80%" }} href={"#"}>
                Corporates
              </Link>
              <Link style={{ marginRight: 20, fontSize: "80%" }} href={"#"}>
                Offers
              </Link>
              <Link style={{ marginRight: 20, fontSize: "80%" }} href={"#"}>
                Gift Cards
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
