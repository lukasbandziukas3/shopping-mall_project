import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProducts,
  saveProduct,
  updateProduct,
} from "../../../services/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await getAllProducts();
    return response.data;
  }
);

export const productAdded = createAsyncThunk(
  "products/productAdded",
  async (product) => {
    const response = await saveProduct(product);
    return response.data;
  }
);

export const productUpdated = createAsyncThunk(
  "products/productUpdated",
  async (product) => {
    const response = await updateProduct(product);
    return response.data;
  }
);
