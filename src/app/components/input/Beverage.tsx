import { Beverage } from "@/app/data/beverage/data";
import { AppDispatch, RootState } from "@/app/store";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addBeverages,
  addTotalPrice,
  removeBeverage,
} from "@/app/store/ui/beverage.slice";

interface FoodType {
  item: Beverage;
  foodCount: number;
  setFoodCount: (param: number) => void;
}

const MAX_ITEM = 99,
  MIN_ITEM = 0;

const BeverageItemInput: React.FC<FoodType> = ({
  item,
  foodCount,
  setFoodCount,
}) => {
  const { totalPrice } = useSelector((state: RootState) => state.beverage);
  const dispatch = useDispatch<AppDispatch>();

  const handleDrop = () => {
    if (foodCount < MIN_ITEM) {
      setFoodCount(0);
    } else if (foodCount - 1 === 0) {
      dispatch(removeBeverage(item));
      dispatch(addTotalPrice(totalPrice - item.price));
      setFoodCount(foodCount - 1);
    } else {
      if (totalPrice > 0) {
        dispatch(addTotalPrice(totalPrice - item.price));
        dispatch(addBeverages({ ...item, foodCount: foodCount - 1 }));
      }
      setFoodCount(foodCount - 1);
    }
  };

  const handleAdd = () => {
    if (foodCount > MAX_ITEM) {
      setFoodCount(99);
    } else {
      dispatch(addTotalPrice(totalPrice + item.price));
      dispatch(addBeverages({ ...item, foodCount: foodCount + 1 }));
      setFoodCount(foodCount + 1);
    }
  };

  return (
    <>
      <Box display={"flex"} gap={2}>
        <Button
          variant="outlined"
          color="error"
          // sx={{ fontSize: "x-small" }}
          sx={{ borderRadius: 50, minWidth: "20px" }}
          onClick={handleDrop}
        >
          -
        </Button>
        <Typography variant="body2" mt={"6px"}>
          {foodCount}
        </Typography>
        <Button
          variant="outlined"
          color="error"
          // sx={{ fontSize: "x-small" }}
          sx={{ borderRadius: 50, minWidth: "20px" }}
          onClick={handleAdd}
        >
          +
        </Button>
      </Box>
    </>
  );
};

export default BeverageItemInput;
