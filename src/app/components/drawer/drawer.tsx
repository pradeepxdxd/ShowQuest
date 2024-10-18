import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Logout } from "@mui/icons-material";
import { logout } from "@/app/store/auth/auth.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { Avatar, Button, Divider, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import useAuth from "@/app/hooks/useAuth";
import { clearToken } from "@/app/store/auth/auth.slice";

type Anchor = "top" | "left" | "bottom" | "right";

interface DrawerProp {
  state: Record<Anchor, boolean>;
  toggleDrawer: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const AnchorTemporaryDrawer: React.FC<DrawerProp> = ({
  state,
  toggleDrawer,
}) => {
  const router = useRouter();
  const user = useAuth();

  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearToken());
  };

  const handleEditProfile = () => {
    router.push("/pages/profile/edit");
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {user ? (
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Box>
              <ListItem>
                <Typography variant="h5" fontWeight="bold">
                  Hey!
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  variant="caption"
                  fontWeight="normal"
                  style={{ cursor: "pointer" }}
                  onClick={handleEditProfile}
                >
                  Edit Profile {">"}
                </Typography>
              </ListItem>
            </Box>
            <Box>
              <ListItem>
                <Avatar
                  alt="Cindy Baker"
                  src="https://assets-in.bmscdn.com/static/2023/10/default-pic.png"
                />
              </ListItem>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <ListItem>
              <Typography variant="h5" fontWeight={"bold"}>
                Hey!
              </Typography>
            </ListItem>
            <Divider />
            <Grid container my={2}>
              <Grid
                item
                sm={3}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Avatar
                  src="https://in.bmscdn.com/webin/movies/superstar/rewards_login.png"
                  alt="game"
                />
              </Grid>
              <Grid item sm={6}>
                <Typography variant="subtitle2">
                  Unlock special offers and great benefits
                </Typography>
              </Grid>
              <Grid item sm={3}>
                <Button variant="outlined" color="error">
                  Login
                </Button>
              </Grid>
            </Grid>
            <Divider />
          </Box>
        </>
      )}

      {!user ? (
        <>
          <List>
            {[
              "Notifications",
              "Play Credit Card",
              "Help & Support",
              "Rewards",
              "BookAChange",
            ].map((text, index) => (
              <>
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={handleLogout}>
                    <ListItemIcon>
                      {text === "Logout" ? (
                        <Logout />
                      ) : index % 2 === 0 ? (
                        <InboxIcon />
                      ) : (
                        <MailIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        </>
      ) : (
        <>
          <List>
            {[
              "Notificatons",
              "Your Orders",
              "Stream Library",
              "Play Credit Card",
              "Help Centre",
              "Accounts & Settings",
              "Rewards",
              "Offers",
              "Gift Cards",
              "Food & Beverages",
              "List Your Show",
            ].map((text, index) => (
              <>
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              color="error"
              sx={{
                width: "80%",
                position: "absolute",
                bottom: "20px",
                // bgcolor: "rgb(248, 68, 100)",
              }}
              onClick={handleLogout}
            >
              Sign Out
            </Button>
          </Box>
        </>
      )}
    </Box>
  );

  return (
    <Drawer
      anchor={"right"}
      open={state["right"]}
      onClose={toggleDrawer("right", false)}
    >
      {list("right")}
    </Drawer>
  );
};

export default AnchorTemporaryDrawer;
