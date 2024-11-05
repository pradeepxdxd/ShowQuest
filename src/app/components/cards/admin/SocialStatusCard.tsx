// SocialStatsCard.tsx
import React from "react";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";

interface SocialStatsCardProps {
  icon: React.ReactNode;
  primaryStat: string;
  primaryLabel: string;
  secondaryStat: string;
  secondaryLabel: string;
  bgColor: string;
}

const SocialStatsCard: React.FC<SocialStatsCardProps> = ({
  icon,
  primaryStat,
  primaryLabel,
  secondaryStat,
  secondaryLabel,
  bgColor,
}) => {
  return (
    <Card sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 3 }}>
      <Box
        sx={{
          backgroundColor: bgColor,
          color: "#fff",
          p: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <CardContent sx={{ textAlign: "center", p: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="h6" fontWeight="bold">
              {primaryStat}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {primaryLabel}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" fontWeight="bold">
              {secondaryStat}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {secondaryLabel}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SocialStatsCard;
