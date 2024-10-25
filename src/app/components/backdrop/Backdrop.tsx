import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Theme } from "@mui/material";

interface BackdropType {
  open: boolean;
}

const CustomBackdrop: React.FC<BackdropType> = ({ open }) => {
  return (
    <div>
      <Backdrop
        sx={(theme: Theme) => ({
          color: "#fff",
          zIndex: theme.zIndex.drawer + 1,
        })}
        open={open}
      >
        <CircularProgress color="error" />
      </Backdrop>
    </div>
  );
};

export default CustomBackdrop;
