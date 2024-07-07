import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllOrders, saveOrder } from "../../../services/orders";
import { deleteOrder } from "../../cart/redux/cartSlice";
import {toast} from "react-toastify";
import {addOrderSuccess, getAllOrdersSuccess, getError, getRequest} from "./ordersSlice";

export const fetchOrders = createAsyncThunk(
    "orders/fetchOrders",
    async (param, { dispatch, getState }) => {
        dispatch(getRequest());
        try {
            const response = await getAllOrders();
            if (response.data) {
                dispatch(getAllOrdersSuccess(response.data));
            }
        }
        catch (error) {
            toast.warning(`${error.data}`, { autoClose: 2500 });
            dispatch(getError(error.response.data));
        }
    }
);
export const orderAdded = createAsyncThunk(
  "orders/orderAdded",
  async (order, { dispatch }) => {
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
          toast.warning(`${error.response.data}`, { autoClose: 2500 });

          dispatch(getError(error.response.data));
      }
  }
);
