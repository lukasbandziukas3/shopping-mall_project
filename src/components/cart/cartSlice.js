import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addedOrderToCart(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const { addedOrderToCart } = cartSlice.actions;

export default cartSlice.reducer;
