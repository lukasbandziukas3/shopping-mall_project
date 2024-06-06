import { createSlice } from "@reduxjs/toolkit";
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
        state.categories.push(action.payload);
      })
      .addCase(categoryAdded.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(categoryUpdated.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(categoryUpdated.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { id, name } = action.payload;
        const existingCategory = state.categories.find(
          (category) => category.id === id
        );
        if (existingCategory) {
          existingCategory.name = name;
        }
      })
      .addCase(categoryUpdated.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default categoriesSlice.reducer;
