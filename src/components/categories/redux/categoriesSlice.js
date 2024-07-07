import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  status: "idle",
  err: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.status = 'loading';
    },
    getAllCategoriesSuccess: (state, action) => {
      state.status = "succeeded";
      state.categories = action.payload;
    },
    addCategorySuccess: (state, action) => {
      state.status = "succeeded";
      state.categories.push(action.payload);
    },
    updateCategorySuccess: (state, action) => {
      state.status = "succeeded";
      const { _id, name } = action.payload;
      const existingCategory = state.categories.find(
          (category) => category._id === _id
      );
      if (existingCategory) {
        existingCategory.name = name;
      }
    },
    getError: (state, action) => {
      state.status = "failed";
      state.err = action.payload;
    },
  },
});

export const {
  addCategorySuccess,
  getAllCategoriesSuccess,
  updateCategorySuccess,
  getRequest,
  getError
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
