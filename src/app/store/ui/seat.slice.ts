import { createSlice } from "@reduxjs/toolkit";

interface ClientSeat {
  seatNo: string | number;
  seatName: string;
  seatRow : string;
}

export interface InitialState {
  totalSeats: number;
  totalSeatCost: number;
  clientSeats: ClientSeat[];
  proceedToPayPayment : number;
}

const initialState: InitialState = {
  totalSeats: 0,
  totalSeatCost: 0,
  clientSeats: [],
  proceedToPayPayment : 0,
};

const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    addSeat: (state, action) => {
      state.totalSeats = state.totalSeats + action.payload;
    },
    clearSeats: (state) => {
      state.totalSeats = 0;
    },
    addSeatCost: (state, action) => {
      state.totalSeatCost = action.payload;
    },
    addClientSeatDetails: (state, action) => {
      state.clientSeats = [...state.clientSeats, action.payload];
    },
    clearClientSeatDetails: (state) => {
      state.clientSeats = [];
    },
    addProceedToPayCost : (state, action) => {
      state.proceedToPayPayment = action.payload
    },
  },
});

export const {
  addSeat,
  clearSeats,
  addSeatCost,
  addClientSeatDetails,
  clearClientSeatDetails,
  addProceedToPayCost
} = seatSlice.actions;
export default seatSlice.reducer;
