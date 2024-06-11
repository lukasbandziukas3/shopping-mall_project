import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllOrders, saveOrder } from "../../../services/orders";
import { deleteOrderFromCart } from "../../cart/redux/cartSlice";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await getAllOrders();
  return response.data;
});

export const orderAdded = createAsyncThunk(
  "orders/orderAdded",
  async (order, { dispatch }) => {
    const response = await saveOrder(order);
    dispatch(deleteOrderFromCart());
    return response.data;
  }
);
