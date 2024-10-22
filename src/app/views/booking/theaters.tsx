import React from "react";
import CustomTooltip from "@/app/components/tooltip/CustomTooltip";
import { Theater } from "@/app/data/theater/data";
import {
  Box,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import BookOnlineIcon from "@mui/icons-material/BookOnline";

interface TheaterType {
  data: Theater[];
}

const TheaterList: React.FC<TheaterType> = ({ data }) => {
  return (
    <>
      {data &&
        data?.length > 0 &&
        data?.map((show, index) => (
          <>
            <ListItem alignItems="flex-start" key={show.id}>
              <ListItemText
                primary={
                  <>
                    <Typography variant="body2">{show.name}</Typography>
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
                      <Box flexGrow={1}></Box>
                      {show.time.map((time, index) => (
                        <CustomTooltip data={time} key={index} />
                      ))}
                    </Box>
                  </React.Fragment>
                }
              />
            </ListItem>
            {data.length - 1 !== index ? <Divider component="li" /> : null}
          </>
        ))}
    </>
  );
};

export default TheaterList;
