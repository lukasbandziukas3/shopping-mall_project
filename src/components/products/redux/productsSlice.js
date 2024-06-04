import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { name: "snikers", categoryID: 1, price: 25, quantity: 17, id: 1 },
    { name: "blouse", categoryID: 1, price: 55, quantity: 23, id: 2 },
    { name: "scirt", categoryID: 2, price: 5, quantity: 23, id: 3 },
    { name: "scirt", categoryID: 4, price: 5, quantity: 23, id: 4 },
    { name: "scirt", categoryID: 3, price: 5, quantity: 23, id: 5 },
    { name: "hammer", categoryID: 5, price: 15, quantity: 3, id: 6 },
  ],
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
});

export const { productAdded, productUpdated, updateProductQuantity } =
  productsSlice.actions;

export default productsSlice.reducer;
