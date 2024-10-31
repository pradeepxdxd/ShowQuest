import { api_url } from "@/app/config/dev";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const sendBookingDetailsMail = createAsyncThunk(
  "booking/sendBookingDetailsMail",
  async (params: object, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${api_url}/api/booking`, params);
      if (response.status === 200) return response.data;
      return rejectWithValue({
        error: response?.data?.error,
        status: response?.status,
      });
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue({
          error: err.response?.data?.error,
          status: err.response?.status,
        });
      }
      return rejectWithValue({ error: "Internal Server Error", status: 500 });
    }
  }
);

interface InitialState {
  loading: boolean;
  error: null | object | string | undefined;
}

const initialState: InitialState = {
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendBookingDetailsMail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(sendBookingDetailsMail.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(sendBookingDetailsMail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default bookingSlice.reducer;
