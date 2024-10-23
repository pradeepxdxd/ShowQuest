import Image from "next/image";
import React from "react";
import beverageImage from "@/app/assets/beverage/beverage.jpg";
import { Box, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BeverageList from "@/app/components/cards/beverage/BeverageList";

export default function Beverage() {
  return (
    <Box>
      <Image src={beverageImage} alt="beverage" style={{ borderRadius: 10 }} />
      <Box mt={3}>
        <Card>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography gutterBottom variant="h5">
              Grab a bite !
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Prebook Your Meal and Save More!
            </Typography>
            <Box mt={3}>
              <BeverageList />
            </Box>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", ml: 1 }}
            >
              Note:
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              1. Images are for representation purposes only.
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              2. Prices inclusive of taxes.
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              3. All nutritional information is indicative, values are per serve
              as shared by the Cinema and may vary depending on the ingredients
              and portion size.
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              4. An average active adult requires 2000 kcal energy per day,
              however, calorie needs may vary.
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mt: 3 }}
            >
              Inox T&C:
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              1. Children above the age of 3 will need a separate ticket
              ,children will not be allowed in Adult movie.
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              2. Please carry a valid age proof for A rated movies -18 years and
              over only would be given entry.
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              3. Tickets are not refundable or transferable.
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              4. Outside food and beverages are not allowed ,Right of admission
              is reserved.
            </Typography>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
