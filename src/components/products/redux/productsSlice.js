import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
  err: null,
  filters: [],
  searchText: ""
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductQuantity: (state, action) => {
      const {productId, quantityDef} = action.payload;
      const existingProduct = state.products.find(
          (product) => product._id === productId
      );
      if (existingProduct) {
        existingProduct.quantity += quantityDef;
      }
    },
    getRequest: (state) => {
      state.status = 'loading';
    },
    getAllProductsSuccess: (state, action) => {
      state.status = "succeeded";
      state.products = action.payload;
    },
    addProductSuccess: (state, action) => {
      state.status = "succeeded";
      state.products.push(action.payload);
    },
    updateProductSuccess: (state, action) => {
      state.status = "succeeded";
      const {_id, name, category, price, quantity} = action.payload;
      const existingProduct = state.products.find(
          (product) => product._id === _id
      );
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.category = category;
        existingProduct.price = price;
        existingProduct.quantity = quantity;
      }
    },
    getError: (state, action) => {
      state.status = "failed";
      state.err = action.payload;
    },
    setCategoryFilters(state, action) {
      state.filters = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    }
  }
});

export const {
  updateProductQuantity,
  setCategoryFilters,
  addProductSuccess,
  getAllProductsSuccess,
  updateProductSuccess,
  setSearchText,
  getRequest,
  getError
} = productsSlice.actions;

export default productsSlice.reducer;
