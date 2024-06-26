import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCategories,
  saveCategory,
  updateCategory,
} from "../../../services/categories";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await getAllCategories();
    return response.data;
  }
);

export const categoryAdded = createAsyncThunk(
  "categories/categoryAdded",
  async (category) => {
    const response = await saveCategory(category);
    return response.data;
  }
);

export const categoryUpdated = createAsyncThunk(
  "categories/categoryUpdated",
  async (category) => {
    const  { categoryData, categoryID } = category
    const  response = await updateCategory(categoryID,categoryData);
    return response.data;
  }
);
