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
import useResponsive from "@/app/hooks/useResponsive";

interface TheaterType {
  data: Theater[];
  showid: string
}

const TheaterList: React.FC<TheaterType> = ({ data, showid }) => {
  const {showCardCount} = useResponsive()
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
                    <Box display={"flex"} flexDirection={showCardCount === 2 ? 'column' : 'row'}>
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
                        <CustomTooltip data={time} key={index} id={show.id} showid={showid} />
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
