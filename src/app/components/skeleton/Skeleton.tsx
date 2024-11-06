import { Box, Skeleton } from "@mui/material";

const SkeletonCard = () => (
  <Box>
    <Skeleton
      variant="rectangular"
      width={300}
      height={300}
      sx={{ borderRadius: 1 }}
    />
    <Skeleton variant="text" sx={{ marginTop: 1, width: "60%" }} />
    <Skeleton variant="text" sx={{ width: "40%" }} />
  </Box>
);

export default SkeletonCard;
