import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteOrder(state, action) {
      state.orders = [];
    },
    addOrder(state, action) {
      const productExistInOrder = state.orders.find((order) => {
        return order.productId === action.payload.productId;
      });
      if (productExistInOrder) {
        productExistInOrder.productQuantity += action.payload.productQuantity;
      } else {
        state.orders.push(action.payload);
      }
    }
  },
});

export const {
  deleteOrder,
  addOrder
} = cartSlice.actions;

export default cartSlice.reducer;
