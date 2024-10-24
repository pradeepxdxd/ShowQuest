import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import authModalReducer from "./ui/authModal.slice";
import seatReducer from "./ui/seat.slice";
import beverageReducer from "./ui/beverage.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authModal: authModalReducer,
    seat: seatReducer,
    beverage: beverageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
