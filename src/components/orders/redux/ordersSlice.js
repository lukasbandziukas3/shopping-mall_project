import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders, orderAdded } from "./thunk";

const initialState = {
  orders: [],
  status: "idle",
  err: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOrders.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(orderAdded.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(orderAdded.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders.push(action.payload);
      })
      .addCase(orderAdded.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default ordersSlice.reducer;
