import { useMediaQuery } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { useEffect, useState } from "react";

export default function useResponsive() {
  const [showCardCount, setShowCArdCount] = useState<number>(0);
  const theme: Theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  useEffect(() => {
    if (isXs) setShowCArdCount(2);
    else if (isSm) setShowCArdCount(3);
    else if (isMd) setShowCArdCount(4);
    else if (isLg) setShowCArdCount(5);
    else if (isXl) setShowCArdCount(5);
  }, [isLg, isMd, isSm, isXl, isXs]);

  return { showCardCount };
}
