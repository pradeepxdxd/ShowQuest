import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
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
      />
    </div>
  );
};

export default CustomBackdrop;