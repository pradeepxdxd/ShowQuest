import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} placement="top" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const CustomTooltip = () => {
  return (
    <>
      <HtmlTooltip
        title={
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box mx={1} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                    <Typography variant="body2">Rs. 790.00</Typography>
                    <Typography variant="caption">Club</Typography>
                    <Typography sx={{color:'#0ed20e'}} variant="caption">Available</Typography>
                </Box>
                <Box mx={1} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                    <Typography variant="body2">Rs. 790.00</Typography>
                    <Typography variant="caption">Club</Typography>
                    <Typography sx={{color:'#0ed20e'}} variant="caption">Available</Typography>
                </Box>
            </Box>
        }
      >
        <Button sx={{m:1}} variant="outlined" color="success">09:20 PM</Button>
      </HtmlTooltip>
    </>
  );
};

export default CustomTooltip;
