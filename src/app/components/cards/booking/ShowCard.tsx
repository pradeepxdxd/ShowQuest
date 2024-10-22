import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Theater } from "@/app/data/theater/data";
import TheaterList from "@/app/views/booking/theaters";

interface ShowCardType {
  data: Theater[];
}

const ShowCard: React.FC<ShowCardType> = ({ data }) => {
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
      <TheaterList data={data} />
    </List>
  );
};

export default ShowCard;
