import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

function ActiveUserCards() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        mt: 4,
      }}
    >
      <Box sx={{ maxWidth: 1200, width: "100%" }}>
        <Grid container spacing={3}>
          {[
            {
              label: "Active Users",
              data: "500M",
              color: "linear-gradient(45deg, #6a11cb, #2575fc)",
            },
            {
              label: "Active Tracker",
              data: "100M",
              color: "linear-gradient(45deg, #7c11cb, #0abfbc)",
            },
            {
              label: "Active Theaters",
              data: "120K",
              color: "linear-gradient(45deg, #ff6a00, #ee0979)",
            },
            {
              label: "Movies",
              data: "20K",
              color: "linear-gradient(45deg, #3b82f6, #10b981)",
            },
            {
              label: "Live Events",
              data: "882",
              color: "linear-gradient(45deg, #4c51bf, #9f7aea)",
            },
            {
              label: "Premiere Movies",
              data: "8K",
              color: "linear-gradient(45deg, #ff416c, #ffcc00)",
            },
          ].map((data, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  background: data.color,
                  color: "#fff",
                  padding: "20px",
                  borderRadius: "15px",
                  width: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h5">{data.label}</Typography>
                  <Typography variant="h2" fontWeight="bold">
                    {data.data}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ActiveUserCards;
