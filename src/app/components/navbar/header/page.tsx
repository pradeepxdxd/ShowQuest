"use client";

import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import headerLogo from "@/app/assets/nav/headerlogo2.png";
import Image from "next/image";
import { Button, FormControl, Select } from "@mui/material";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import AuthModal from "@/app/components/modals/auth/page";
import CustomDrawer from "@/app/components/drawer/drawer";

// firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

type Anchor = "top" | "left" | "bottom" | "right";

export default function PrimarySearchAppBar() {
  const [open, setOpen] = React.useState(false);

  const [user] = useAuthState(auth);
  console.log({ user });

  const handleOpen = () => setOpen(true);
  const handleClose = (event: object, reason: string) => {
    if (reason === "backdropClick") return;
    setOpen(false);
  };

  const router = useRouter();

  const handleSignInClick = () => handleOpen();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const handleHamburger = () => {
    setState({ ...state, ["right"]: true });
    toggleDrawer("right", true);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Box sx={{ flexGrow: 0.15 }} />
            <Image
              src={headerLogo}
              alt="bookMyShow"
              width={100}
              height={30}
              className={styles.clickable}
              onClick={() => router.push("/")}
            />
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for Movies"
                inputProps={{ "aria-label": "search" }}
                style={{
                  width: "500px !important",
                }}
              />
            </Search>
            <Box sx={{ flexGrow: 0.7 }} />
            <Box mr={2}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={"Indore"}
                  disableUnderline
                >
                  <MenuItem value={"Indore"}>Indore</MenuItem>
                  <MenuItem value={"Pune"}>Pune</MenuItem>
                  <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mr={2}>
              <Button
                color="error"
                sx={{
                  bgcolor: "rgb(248, 68, 100)",
                  color: "white",
                  height: "30px",
                }}
                onClick={handleSignInClick}
              >
                Sign In
              </Button>
            </Box>
            <Box>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                onClick={handleHamburger}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <AuthModal open={open} handleClose={handleClose} />
      <CustomDrawer state={state} toggleDrawer={toggleDrawer} />
    </>
  );
}
