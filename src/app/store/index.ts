import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import authModalReducer from "./ui/authModal.slice";
import seatReducer from "./ui/seat.slice";
import beverageReducer from "./ui/beverage.slice";
import bookingReducer from "./booking/booking.slice";
import orderReducer from "./order/order.slice";
import showReducer from "./show/show.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    authModal: authModalReducer,
    seat: seatReducer,
    beverage: beverageReducer,
    booking: bookingReducer,
    order: orderReducer,
    show: showReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
