import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../../services/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getAllProducts();
    return response.data;
  }
);
