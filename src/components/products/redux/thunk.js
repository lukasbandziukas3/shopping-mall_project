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

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
    async (param, { dispatch, getState }) => {
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
        toast.warning(`${error.data}`, { autoClose: 2500 });
        dispatch(getError(error));
    }
  }
);

export const productAdded = createAsyncThunk (
  "products/productAdded",
  async (product,{ dispatch, getState }) => {
      dispatch(getRequest());
      try {
          const response = await saveProduct(product);
          if (response) {
              dispatch(addProductSuccess(response.data));
              toast.success(`User was added`, { autoClose: 2500 });
          }
      }
      catch (error) {
          toast.warning(`${error.data}`, { autoClose: 2500 });
          dispatch(getError(error));
      }
  }
);

export const productUpdated = createAsyncThunk(
  "products/productUpdated",
  async (product,{ dispatch, getState }) => {
      dispatch(getRequest());
      try {
          const {productId, productData} = product;
          const response = await updateProduct(productId, productData);
          if (response) {
              dispatch(updateProductSuccess(response.data));
              toast.success(`User was updated`, {autoClose: 2500});
          }
      }
      catch (error) {
          toast.warning(`${error.data}`, { autoClose: 2500 });
          dispatch(getError(error));
      }
  }
);
