import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProducts,
  saveProduct,
  updateProduct,
} from "../../../services/products";
import {
    getError,
    getRequest,
    getAllProductsSuccess, addProductSuccess, updateProductSuccess
} from "./productsSlice";
import {toast} from "react-toastify";
import {RootState} from "../../../app/store";
import {Product} from "../../../interfaces/globalTypes";



export const fetchProducts = createAsyncThunk<void, void, {state: RootState }>(
  "products/fetchProducts",
    async (_param, { dispatch, getState})=> {
     dispatch(getRequest());
    try {
        const {filters, searchText} = getState().products;
        const filtersCategory = filters.map(filter => filter._id);
        const response = await getAllProducts({filtersCategory, searchText});
        if (response.data) {
            dispatch(getAllProductsSuccess(response.data));
        }
    }
    catch (error) {
        if (typeof  error === "string") {
            toast.warning(`${error}`, { autoClose: 2500 });
            dispatch(getError(error));
        }
        else {
            console.error(error);
            dispatch(getError("unknown error"));
        }
    }
  }
);

export const productAdded = createAsyncThunk (
  "products/productAdded",
  async (product:Omit<Product,'_id'>,{ dispatch }) => {
      dispatch(getRequest());
      try {
          const response = await saveProduct(product);
          if (response) {
              dispatch(addProductSuccess(response.data));
              toast.success(`Product was added`, { autoClose: 2500 });
          }
      }
      catch (error) {
          if (typeof  error === "string") {
              toast.warning(`${error}`, { autoClose: 2500 });
              dispatch(getError(error));
          }
          else {
              console.error(error);
              dispatch(getError("unknown error"));
          }
      }
  }
);

export const productUpdated = createAsyncThunk(
  "products/productUpdated",
  async (product:Product,{ dispatch }) => {
      dispatch(getRequest());
      try {
          const {_id, ...productData} = product;
          const response = await updateProduct(_id, productData);
          if (response) {
              dispatch(updateProductSuccess(response.data));
              toast.success(`Product was updated`, {autoClose: 2500});
          }
      }
      catch (error) {
          if (typeof  error === "string") {
              toast.warning(`${error}`, {autoClose: 2500});
              dispatch(getError(error));
          }
          else {
              console.error(error)
              dispatch(getError("unknown error"));
          }
      }
  }
);
