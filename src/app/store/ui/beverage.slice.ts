import { createSlice } from "@reduxjs/toolkit";

interface FoodAndBeverage {
  foodCount: number;
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface TotalFood {
  foodItems: FoodAndBeverage[];
  totalPrice: number;
}

const initialState: TotalFood = {
  foodItems: [],
  totalPrice: 0,
};

const beverageSlice = createSlice({
  name: "beverage",
  initialState,
  reducers: {
    addBeverages: (state, action) => {
      if (state.foodItems.length === 0) {
        state.foodItems = [...state.foodItems, action.payload];
      } else {
        state.foodItems = state.foodItems.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        });
      }
    },
    removeBeverage: (state, action) => {
      state.foodItems = state.foodItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    addTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
    clearBeverages: (state) => {
      state.foodItems = [];
    },
  },
});

export const { addBeverages, clearBeverages, addTotalPrice, removeBeverage } =
  beverageSlice.actions;
export default beverageSlice.reducer;