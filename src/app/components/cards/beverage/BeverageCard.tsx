"use client";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Beverage } from "@/app/data/beverage/data";
import { Box, CardActions } from "@mui/material";
import BeverageItemInput from "../../input/Beverage";
import { addBeverages, addTotalPrice } from "@/app/store/ui/beverage.slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";

const BeverageCard: React.FC<{ item: Beverage }> = ({ item }) => {
  const [foodCount, setFoodCount] = useState<number>(0);
  const { totalPrice } = useSelector((state: RootState) => state.beverage);
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    setFoodCount(foodCount + 1);
    dispatch(addTotalPrice(totalPrice + item.price));
    dispatch(addBeverages({...item, foodCount : foodCount + 1}));
  };

  return (
    <Card>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
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
            <Typography variant="body2" component="div" sx={{ marginTop: 1 }}>
              ₹{item.price}
            </Typography>
          </CardContent>
        </Box>
      </Box>
      <CardActions>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          {foodCount > 0 ? (
            <BeverageItemInput
              item={item}
              foodCount={foodCount}
              setFoodCount={setFoodCount}
            />
          ) : (
            <Button
              variant="outlined"
              color="error"
              sx={{ fontSize: "x-small" }}
              onClick={handleAdd}
            >
              Add
            </Button>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};

export default BeverageCard;
