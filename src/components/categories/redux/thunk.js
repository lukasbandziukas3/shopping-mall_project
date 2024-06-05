import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategories } from "../../../services/categories";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await getAllCategories();
    return response.data;
  }
);
