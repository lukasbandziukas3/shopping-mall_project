import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./thunk";

const initialState = {
  categories: [],
  status: "idle",
  err: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoryUpdated(state, action) {
      const { id, name } = action.payload;
      const existingCategory = state.categories.find(
        (category) => category.id === id
      );
      if (existingCategory) {
        existingCategory.name = name;
      }
    },
    categoryAdded(state, action) {
      state.categories.push(action.payload);
    },
  },
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
      });
  },
});

export const { categoryUpdated, categoryAdded } = categoriesSlice.actions;

export default categoriesSlice.reducer;
