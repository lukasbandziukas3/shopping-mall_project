import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BaseState, Category, ProductGet,} from "../../../interfaces/globalTypes";

export interface ProductsState extends BaseState{
  products:ProductGet[] ,
  searchText: string,
  filters: Category[]
}

const initialState: ProductsState = {
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
    updateProductQuantity: (state,  action: PayloadAction<{productId:string, quantityDef:number}>) => {
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
    getAllProductsSuccess: (state, action: PayloadAction<ProductGet[]>) => {
      state.status = "succeeded";
      state.products = action.payload;
    },
    addProductSuccess: (state, action: PayloadAction<ProductGet>) => {
      state.status = "succeeded";
      state.products.push(action.payload);
    },
    updateProductSuccess: (state, action: PayloadAction<ProductGet>) => {
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
    getError: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.err = action.payload;
    },
    setCategoryFilters(state, action: PayloadAction<Category[]>) {
      state.filters = action.payload;
    },
    setSearchText(state, action: PayloadAction<string>) {
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
