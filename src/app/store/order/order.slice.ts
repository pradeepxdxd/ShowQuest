import { Order, OrderLists } from "@/firebase/actions/action.types";
import { addOrder, getOrderOfUser } from "@/firebase/actions/order";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addOrderData = createAsyncThunk(
  "order/addOrderData",
  async (order: Order, { rejectWithValue }) => {
    try {
      const resp = await addOrder(order);
      if (typeof resp === "object") return resp;
      else
        return rejectWithValue({
          error: "Something went wrong, order hasn't save!",
        });
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue({
          error: err.message,
        });
      }
      return rejectWithValue({ error: "Internal Server Error", status: 500 });
    }
  }
);

export const getOrderDataOfUser = createAsyncThunk(
  "order/getOrderDataOfUser",
  async (id: string, { rejectWithValue }) => {
    try {
      const resp = await getOrderOfUser(id);
      console.log({ resp });
      if (resp && resp.length > 0) return resp;
      else
        return rejectWithValue({
          error: "No any order yet!",
        });
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue({
          error: err.message,
        });
      }
      return rejectWithValue({ error: "Internal Server Error", status: 500 });
    }
  }
);

interface InitialState {
  order: Order | null;
  loading: boolean;
  error: null | object | string | undefined;
  orders: OrderLists[];
}

const initialState: InitialState = {
  loading: false,
  error: null,
  order: null,
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addOrderData.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.order = null;
    });
    builder.addCase(addOrderData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.order = action.payload as unknown as Order;
    });
    builder.addCase(addOrderData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getOrderDataOfUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.orders = [];
    });
    builder.addCase(getOrderDataOfUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.orders = action.payload;
    });
    builder.addCase(getOrderDataOfUser.rejected, (state, action) => {
      console.log({ action });
      state.orders = [];
      state.loading = false;
      state.error = (action.payload as { error: string }).error;
    });
  },
});

export default orderSlice.reducer;
