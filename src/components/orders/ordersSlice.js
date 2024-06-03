import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [
    {
      date: new Date(),
      customer: "dev",
      products: [
        { name: "snikers", quantity: 5, price: 5 },
        { name: "trainers", quantity: 1, price: 15 },
      ],
      id: 1,
    },
    {
      date: new Date(),
      customer: "dev",
      products: [{ name: "smartTv", quantity: 1, price: 1500 }],
      id: 2,
    },
    {
      date: new Date(),
      customer: "dev",
      products: [
        { name: "pan", quantity: 5, price: 1 },
        { name: "pencil", quantity: 10, price: 0.5 },
      ],
      id: 3,
    },
    {
      date: new Date(),
      customer: "dev",
      products: [{ name: "book", quantity: 8, price: 2.5 }],
      id: 4,
    },
    {
      date: new Date(),
      customer: "dev",
      products: [{ name: "bentley", quantity: 1, price: 100000 }],
      id: 5,
    },
  ],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    ordersAdded(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const { ordersAdded } = ordersSlice.actions;

export default ordersSlice.reducer;
