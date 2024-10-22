import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { TicketTimeAndPrice } from "@/app/data/theater/data";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} placement="top" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

interface TooltipType {
  data: TicketTimeAndPrice;
}

const CustomTooltip: React.FC<TooltipType> = ({ data }) => {
  return (
    <>
      {data && (
        <HtmlTooltip
          title={
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {data.price.map((pr, index) => (
                <Box
                  key={index}
                  mx={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Typography variant="body2">{`Rs. ${pr.cost}.00`}</Typography>
                  <Typography variant="caption">{pr.seatType}</Typography>
                  <Typography
                    sx={{ color: pr.available ? "#0ed20e" : "orange" }}
                    variant="caption"
                  >
                    {pr.available ? "Available" : "Fast Filling"}
                  </Typography>
                </Box>
              ))}
            </Box>
          }
        >
          <Button sx={{ m: 1 }} variant="outlined" color="success">
            {data.time}
          </Button>
        </HtmlTooltip>
      )}
    </>
  );
};

export default CustomTooltip;

{
  /* <Box
                  mx={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Typography variant="body2">Rs. 790.00</Typography>
                  <Typography variant="caption">Club</Typography>
                  <Typography sx={{ color: "#0ed20e" }} variant="caption">
                    Available
                  </Typography>
                </Box>
                <Box
                  mx={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Typography variant="body2">Rs. 790.00</Typography>
                  <Typography variant="caption">Club</Typography>
                  <Typography sx={{ color: "#0ed20e" }} variant="caption">
                    Available
                  </Typography>
                </Box> */
}
