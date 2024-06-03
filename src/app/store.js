import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/products/productsSlice";
import categoriesReducer from "../components/categories/categoriesSlice";
import ordersReducer from "../components/orders/ordersSlice";
import cartReducer from "../components/cart/cartSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    orders: ordersReducer,
    cart: cartReducer,
  },
});
