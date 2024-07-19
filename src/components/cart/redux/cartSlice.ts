import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "../../../interfaces/globalTypes";

export interface cartState {
  orders: Product[]
}

const initialState:cartState = {
  orders: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteOrder(state) {
      state.orders = [];
    },
    addOrder(state, action : PayloadAction<Product>) {
      const productExistInOrder = state.orders.find((order) => {
        return order._id === action.payload._id;
      });
      if (productExistInOrder) {
        productExistInOrder.quantity += action.payload.quantity;
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
