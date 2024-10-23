import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { beverageData as items } from "@/app/data/beverage/data";

export default function FoodMenu() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3, maxHeight: 500, overflowY: "auto" }}>
      {" "}
      {/* Added maxHeight and overflowY */}
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={6} key={item.id}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: 2,
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 100, height: 100, objectFit: "cover" }}
                image={item.image}
                alt={item.name}
              />
              <Box sx={{ flexGrow: 1, paddingLeft: 2 }}>
                <CardContent>
                  <Typography variant="body2" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="div"
                    sx={{ marginTop: 1 }}
                  >
                    ₹{item.price}
                  </Typography>
                </CardContent>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button variant="outlined" color="error" sx={{ fontSize:'x-small'}}>
                  Add
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
