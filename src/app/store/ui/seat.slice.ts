import { createSlice } from "@reduxjs/toolkit";
import { StaticImageData } from "next/image";

interface ClientSeat {
  seatNo: string | number;
  seatName: string;
  seatRow: string;
}

interface TheaterDetails {
  theaterName: string;
  timing: string;
  showName: string;
  showImage: string | StaticImageData;
}

export interface InitialState {
  totalSeats: number;
  totalSeatCost: number;
  clientSeats: ClientSeat[];
  proceedToPayPayment: number;
  showType: string;
  theaterDetails: TheaterDetails | null;
  ticketDetails: string;
}

const initialState: InitialState = {
  totalSeats: 0,
  totalSeatCost: 0,
  clientSeats: [],
  proceedToPayPayment: 0,
  showType: "",
  theaterDetails: null,
  ticketDetails: "",
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
    addProceedToPayCost: (state, action) => {
      state.proceedToPayPayment = action.payload;
    },
    setShowType: (state, action) => {
      state.showType = action.payload;
    },
    setTheaterDetails: (state, action) => {
      state.theaterDetails = action.payload;
    },
    setTicketDetails: (state, action) => {
      state.ticketDetails = action.payload;
    },
  },
});

export const {
  addSeat,
  clearSeats,
  addSeatCost,
  addClientSeatDetails,
  clearClientSeatDetails,
  addProceedToPayCost,
  setShowType,
  setTheaterDetails,
  setTicketDetails,
} = seatSlice.actions;
export default seatSlice.reducer;
