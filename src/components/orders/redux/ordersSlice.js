import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "./thunk";

const initialState = {
  orders: [],
  status: "idle",
  err: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    orderAdded: {
      reducer(state, action) {
        state.orders.push(action.payload);
      },
      prepare({ products }) {
        return {
          payload: {
            id: Math.floor(Math.random() * 1000),
            date: new Date().toISOString(),
            customer: "dev",
            products,
          },
        };
      },
    },
  },
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
      });
  },
});

export const { orderAdded } = ordersSlice.actions;

export default ordersSlice.reducer;
