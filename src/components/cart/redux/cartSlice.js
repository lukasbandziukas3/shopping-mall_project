import { createSlice } from "@reduxjs/toolkit";
import { cancelOrderFromCart, addedOrderToCart } from "./thunks";

const initialState = {
  orders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteOrderFromCart(state, action) {
      state.orders = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(cancelOrderFromCart.fulfilled, (state, action) => {
        state.orders = [];
      })
      .addCase(addedOrderToCart.fulfilled, (state, action) => {
        const productExistInOrder = state.orders.find((order) => {
          return order.productId === action.payload.productId;
        });
        if (productExistInOrder) {
          productExistInOrder.productQuantity += action.payload.productQuantity;
        } else {
          state.orders.push(action.payload);
        }
      });
  },
});

export const { deleteOrderFromCart } = cartSlice.actions;

export default cartSlice.reducer;
