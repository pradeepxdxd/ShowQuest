import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { Theme } from "@mui/material";
import Loading from "@/app/ui/loading";

interface BackdropType {
  open: boolean;
}

const CustomBackdrop: React.FC<BackdropType> = ({ open }) => {
  return (
    <Backdrop
      sx={(theme: Theme) => ({
        color: "#fff",
        zIndex: theme.zIndex.drawer + 1,
      })}
      open={open}
    >
      <Loading />
    </Backdrop>
  );
};

export default CustomBackdrop;
