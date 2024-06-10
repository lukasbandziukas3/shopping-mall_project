import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllOrders, saveOrder } from "../../../services/orders";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await getAllOrders();
  return response.data;
});

export const orderAdded = createAsyncThunk(
  "orders/orderAdded",
  async (order) => {
    const response = await saveOrder(order);
    return response.data;
  }
);
