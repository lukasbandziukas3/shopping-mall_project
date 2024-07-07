import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  status: "idle",
  err: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.status = 'loading';
    },
    getAllOrdersSuccess: (state, action) => {
      state.status = "succeeded";
      state.orders = action.payload;
    },
    addOrderSuccess: (state, action) => {
      state.status = "succeeded";
      state.orders.push(action.payload);
    },
    getError: (state, action) => {
      state.status = "failed";
      state.err = action.payload;
    },
  },
});

export const {
  addOrderSuccess,
  getAllOrdersSuccess,
  getRequest,
  getError
} = ordersSlice.actions;

export default ordersSlice.reducer;
