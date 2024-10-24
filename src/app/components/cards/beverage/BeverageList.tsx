import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { beverageData as items } from "@/app/data/beverage/data";
import BeverageCard from "./BeverageCard";

export default function FoodMenu() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3, maxHeight: 500, overflowY: "auto" }}>
      {" "}
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={6} key={item.id}>
            <BeverageCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
