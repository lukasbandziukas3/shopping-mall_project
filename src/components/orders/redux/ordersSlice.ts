import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BaseState, Order} from "../../../interfaces/globalTypes";

export interface OrderState extends BaseState{
  orders: Order[]
}

const initialState: OrderState = {
  orders: [],
  status: "idle",
  err: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getRequest: (state) => {
      state.status = 'loading';
    },
    getAllOrdersSuccess: (state,  action: PayloadAction<Order[]>) => {
      state.status = "succeeded";
      state.orders = action.payload;
    },
    addOrderSuccess: (state, action: PayloadAction<Order>) => {
      state.status = "succeeded";
      state.orders.push(action.payload);
    },
    getError: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.err = action.payload;
    },
  },
});

export const {
  addOrderSuccess,
  getAllOrdersSuccess,
  getRequest,
  getError
} = ordersSlice.actions;

export default ordersSlice.reducer;
