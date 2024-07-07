import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCategories,
  saveCategory,
  updateCategory,
} from "../../../services/categories";
import {toast} from "react-toastify";
import {
    addCategorySuccess,
    getAllCategoriesSuccess,
    getError,
    getRequest,
    updateCategorySuccess
} from "./categoriesSlice";

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async (param, { dispatch, getState }) => {
        dispatch(getRequest());
        try {
            const response = await getAllCategories();
            if (response.data) {
                dispatch(getAllCategoriesSuccess(response.data));
            }
        }
        catch (error) {
            toast.warning(`${error.data}`, { autoClose: 2500 });
            dispatch(getError(error));
        }
    }
);

export const categoryAdded = createAsyncThunk (
    "categories/categoryAdded",
    async (category,{ dispatch, getState }) => {
        dispatch(getRequest());
        try {
            const response = await saveCategory(category);
            if (response) {
                dispatch(addCategorySuccess(response.data));
                toast.success(`category was added`, { autoClose: 2500 });
            }
        }
        catch (error) {
            toast.warning(`${error.data}`, { autoClose: 2500 });
            dispatch(getError(error));
        }
    }
);

export const categoryUpdated = createAsyncThunk(
    "categories/categoriesUpdated",
    async (category,{ dispatch, getState }) => {
        dispatch(getRequest());
        try {
            const {categoryID, categoryData} = category;
            const response = await updateCategory(categoryID, categoryData);
            if (response) {
                dispatch(updateCategorySuccess(response.data));
                toast.success(`Category was updated`, {autoClose: 2500});
            }
        }
        catch (error) {
            toast.warning(`${error.data}`, { autoClose: 2500 });
            dispatch(getError(error));
        }
    }
);
