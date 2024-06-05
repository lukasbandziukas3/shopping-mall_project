import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllOrders } from "../../../services/orders";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await getAllOrders();
  return response.data;
});
