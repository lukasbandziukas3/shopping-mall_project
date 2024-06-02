import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    { name: "shoes", id: 1 },
    { name: "wears", id: 2 },
    { name: "tools", id: 3 },
    { name: "books", id: 4 },
    { name: "cars", id: 5 },
  ],
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
});

export const { categoryUpdated, categoryAdded } = categoriesSlice.actions;

export default categoriesSlice.reducer;
