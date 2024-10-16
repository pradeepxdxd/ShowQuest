import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
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
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    dispatch(logout());
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam", "Logout"].map((text, index) => (
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
        ))}
      </List>
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
