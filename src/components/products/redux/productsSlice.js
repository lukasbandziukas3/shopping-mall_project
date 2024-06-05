import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./thunk";

const initialState = {
  products: [],
  status: "idle",
  err: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productUpdated(state, action) {
      const { id, name, categoryID, price, quantity } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.categoryID = categoryID;
        existingProduct.price = price;
        existingProduct.quantity = quantity;
      }
    },
    updateProductQuantity(state, action) {
      const { productId, quantityDef } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === productId
      );
      if (existingProduct) {
        existingProduct.quantity += quantityDef;
      }
    },
    productAdded: {
      reducer(state, action) {
        state.products.push(action.payload);
      },
      prepare({ name, categoryID, price, quantity }) {
        return {
          payload: {
            id: Math.floor(Math.random() * 1000),
            name,
            categoryID,
            price,
            quantity,
          },
        };
      },
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
      });
  },
});

export const { productAdded, productUpdated, updateProductQuantity } =
  productsSlice.actions;

export default productsSlice.reducer;
