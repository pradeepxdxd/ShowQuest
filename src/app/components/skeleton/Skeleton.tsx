import { Box, Skeleton } from "@mui/material";

const SkeletonCard = () => (
  <Box sx={{ width: "100%", maxWidth: 300, margin: "auto" }}>
    <Skeleton
      variant="rectangular"
      width="100%"
      height={0}
      sx={{ paddingTop: "100%", borderRadius: 1 }}
    />
    <Skeleton variant="text" sx={{ marginTop: 1, width: "60%" }} />
    <Skeleton variant="text" sx={{ width: "40%" }} />
  </Box>
);

export default SkeletonCard;
