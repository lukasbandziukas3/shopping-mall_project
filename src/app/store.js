import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/products/productsSlice";
import categoriesReducer from "../components/categories/categoriesSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
});
