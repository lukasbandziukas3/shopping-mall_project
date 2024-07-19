import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateProductQuantity } from "../../products/redux/productsSlice";
import { orderAdded } from "../../orders/redux/thunk";
import {addOrder, deleteOrder} from "./cartSlice";
import {RootState} from "../../../app/store";
import {Product} from "../../../interfaces/globalTypes";

export const cancelOrderFromCart =  createAsyncThunk<void, void, {state: RootState }>(
  "cart/cancelOrder",
  async (_param, { dispatch, getState }) => {
    const ordersInCart = getState().cart.orders;
    ordersInCart.forEach((order) =>
      dispatch(
        updateProductQuantity({
          productId: order._id,
          quantityDef: order.quantity,
        })
      )
    );
    dispatch(deleteOrder());
  }
);

export const addedOrderToCart = createAsyncThunk(
  "cart/orderAddedTocart",
  async (product:Product, { dispatch}) => {
    dispatch(
      updateProductQuantity({
        productId: product._id,
        quantityDef: -product.quantity,
      })
    );
    dispatch(addOrder( product));
  }
);

export const makePurchase = createAsyncThunk<void, void, {state: RootState }>(
  "cart/makePurchase",
  async (_param, { dispatch, getState }) => {
    const ordersInCart = getState().cart.orders;
    const productsForPurchase: Pick<Product,"_id" | "quantity">[] = [];
    ordersInCart.forEach((order) =>
      productsForPurchase.push({
        _id: order._id,
        quantity: order.quantity,
      })
    );
    dispatch(orderAdded(productsForPurchase));
  }
);
