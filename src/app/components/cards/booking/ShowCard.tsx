import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Box, Button, IconButton } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import CustomTooltip from "../../tooltip/CustomTooltip";

export default function ShowCard() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 1300, bgcolor: "background.paper", m: 2 }}
    >
      <ListItem alignItems="flex-start">
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          sx={{ width: "100%" }}
        >
          <Typography variant="caption" mx={2} textAlign={"end"}>
            <span>🟢</span>AVAILABLE
          </Typography>
          <Typography variant="caption" mx={2} textAlign={"end"}>
            <span>🔴</span>FAST FILLING
          </Typography>
        </Box>
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <>
              <Typography variant="body2">
                Abhiruchi City Pride: Sinhagad Road
              </Typography>
            </>
          }
          secondary={
            <React.Fragment>
              <Box display={"flex"}>
                <IconButton>
                  <BookOnlineIcon sx={{ color: "#0ed20e" }} />{" "}
                  <Typography
                    variant="caption"
                    component={"span"}
                    sx={{ color: "#0ed20e" }}
                  >
                    M-Ticket
                  </Typography>
                </IconButton>
                <IconButton sx={{ marginLeft: 1 }}>
                  <FastfoodIcon sx={{ color: "orange" }} />{" "}
                  <Typography
                    variant="caption"
                    component={"span"}
                    sx={{ color: "orange" }}
                  >
                    Food & Beverage
                  </Typography>
                </IconButton>
                <Box flexGrow={0.2}></Box>
                <Button sx={{m:1}} variant="outlined" color="success">
                  08:00 PM
                </Button>
                <Button sx={{m:1}} variant="outlined" color="success">
                  08:00 PM
                </Button>
                <Button sx={{m:1}} variant="outlined" color="success">
                  08:00 PM
                </Button>
                <CustomTooltip />
              </Box>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider component="li" />
    </List>
  );
}
