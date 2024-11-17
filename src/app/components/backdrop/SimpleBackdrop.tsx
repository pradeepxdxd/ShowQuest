import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { CircularProgress, Theme } from "@mui/material";

interface BackdropType {
  open: boolean;
}

const SimpleBackdrop: React.FC<BackdropType> = ({ open }) => {
  return (
    <Backdrop
      sx={(theme: Theme) => ({
        color: "#fff",
        zIndex: theme.zIndex.drawer + 1,
      })}
      open={open}
    >
      <CircularProgress />
    </Backdrop>
  );
};

export default SimpleBackdrop;
