import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllOrders, saveOrder } from "../../../services/orders";
import { deleteOrder } from "../../cart/redux/cartSlice";
import {toast} from "react-toastify";
import {addOrderSuccess, getAllOrdersSuccess, getError, getRequest} from "./ordersSlice";
import {Product} from "../../../interfaces/globalTypes";

export const fetchOrders = createAsyncThunk(
    "orders/fetchOrders",
    async (_param, { dispatch }) => {
        dispatch(getRequest());
        try {
            const response = await getAllOrders();
            if (response.data) {
                dispatch(getAllOrdersSuccess(response.data));
            }
        }
        catch (error) {
            if (typeof  error === "string") {
                toast.warning(`${error}`, { autoClose: 2500 });
                dispatch(getError(error));
            }
            else {
                dispatch(getError("unknown error"));
                console.error(error)
            }
        }
    }
);
export const orderAdded = createAsyncThunk(
  "orders/orderAdded",
  async (order: Pick<Product,"_id" | "quantity">[], { dispatch }) => {
      dispatch(getRequest());
      try {
          const response = await saveOrder(order);
          if (response.data) {
              dispatch(addOrderSuccess(response.data));
              dispatch(deleteOrder());
              toast.success(`order was made`, { autoClose: 2500 });
          }
      }
      catch (error) {
          if (typeof  error === "string") {
              toast.warning(`${error}`, {autoClose: 2500});
              dispatch(getError(error));
          }
          else {
                  dispatch(getError("unknown error"));
                  console.error(error)
              }
      }
  }
);
