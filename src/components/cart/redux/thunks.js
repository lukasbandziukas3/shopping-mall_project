import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateProductQuantity } from "../../products/redux/productsSlice";
import { orderAdded } from "../../orders/redux/ordersSlice";

export const cancelOrderFromCart = createAsyncThunk(
  "cart/cancelOrder",
  async (arg, { dispatch, getState }) => {
    const ordersInCart = getState().cart.orders;
    ordersInCart.forEach((order) =>
      dispatch(
        updateProductQuantity({
          productId: order.productId,
          quantityDef: order.productQuantity,
        })
      )
    );
  }
);

export const makePurchase = createAsyncThunk(
  "cart/makePurchase",
  async (arg, { dispatch, getState }) => {
    const ordersInCart = getState().cart.orders;
    const productsForPurchase = [];
    ordersInCart.forEach((order) =>
      productsForPurchase.push({
        productId: order.productId,
        name: order.productName,
        quantity: order.productQuantity,
        price: order.price,
      })
    );
    dispatch(orderAdded({ products: productsForPurchase }));
  }
);
