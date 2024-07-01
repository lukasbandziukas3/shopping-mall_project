import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProducts,
  saveProduct,
  updateProduct,
} from "../../../services/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
    async (param, { dispatch, getState }) => {
     const {filters, searchText} = getState().products
     const filtersCategory =  filters.map(filter => filter._id);
     const response = await getAllProducts({filtersCategory,searchText});
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
    const { productId, productData } = product;
    const response = await updateProduct(productId, productData);
    return response.data;
  }
);
