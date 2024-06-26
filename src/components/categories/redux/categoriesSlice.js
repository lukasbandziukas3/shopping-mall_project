import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import { fetchCategories, categoryAdded, categoryUpdated } from "./thunk";

const initialState = {
  categories: [],
  status: "idle",
  err: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;

      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(categoryAdded.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(categoryAdded.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast.success('category was added', { autoClose: 2500 });
        state.categories.push(action.payload);
      })
      .addCase(categoryAdded.rejected, (state, action) => {
        toast.warning(`ups error`, { autoClose: 2500 });
        state.status = "failed";
      })
      .addCase(categoryUpdated.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(categoryUpdated.fulfilled, (state, action) => {
        state.status = "succeeded";
        toast.success('category was updated', { autoClose: 2500 });
        const { _id, name } = action.payload;
        const existingCategory = state.categories.find(
          (category) => category._id === _id
        );
        if (existingCategory) {
          existingCategory.name = name;
        }
      })
      .addCase(categoryUpdated.rejected, (state, action) => {
        toast.warning(`ups error`, { autoClose: 2500 });
        state.status = "failed";
      });
  },
});

export default categoriesSlice.reducer;
