import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../components/products/redux/productsSlice";
import categoriesReducer from "../components/categories/redux/categoriesSlice";
import usersReducer from "../components/users/redux/usersSlice";
import ordersReducer from "../components/orders/redux/ordersSlice";
import cartReducer from "../components/cart/redux/cartSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    orders: ordersReducer,
    users: usersReducer,
    cart: cartReducer,
  },
  devTools: true
});
