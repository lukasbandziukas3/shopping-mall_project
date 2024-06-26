import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, productAdded, productUpdated } from "./thunk";
import {toast} from "react-toastify";

const initialState = {
  products: [],
  status: "idle",
  err: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductQuantity(state, action) {
      const { productId, quantityDef } = action.payload;
      const existingProduct = state.products.find(
        (product) => product._id === productId
      );
      if (existingProduct) {
        existingProduct.quantity += quantityDef;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(productAdded.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(productAdded.fulfilled, (state, action) => {
        toast.success('product was added', { autoClose: 2500 });
        state.status = "succeeded";
        state.products.push(action.payload);
      })
      .addCase(productAdded.rejected, (state, action) => {
        toast.warning(`ups error`, { autoClose: 2500 });
        state.status = "failed";
      })
      .addCase(productUpdated.pending, (state, action) => {
        toast.success('product was updated', { autoClose: 2500 });
        state.status = "loading";
      })
      .addCase(productUpdated.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { _id, name, category, price, quantity } = action.payload;
        const existingProduct = state.products.find(
          (product) => product._id === _id
        );
        if (existingProduct) {
          existingProduct.name = name;
          existingProduct.category = category;
          existingProduct.price = price;
          existingProduct.quantity = quantity;
        }
      })
      .addCase(productUpdated.rejected, (state, action) => {
        toast.warning(`ups error`, { autoClose: 2500 });
        state.status = "failed";
      });
  },
});

export const { updateProductQuantity } = productsSlice.actions;

export default productsSlice.reducer;
