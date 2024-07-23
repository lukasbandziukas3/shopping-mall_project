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
import {Category} from "../../../interfaces/globalTypes";

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async (_param :undefined, { dispatch }) => {
        dispatch(getRequest());
        try {
            const response = await getAllCategories();
            if (response.data) {
                dispatch(getAllCategoriesSuccess(response.data as Category[])  );
            }
        }
        catch (error) {
           if (typeof  error === "string") {
               toast.warning(`${error}`, {autoClose: 2500});
               dispatch(getError(error ))
           }
           else {
               dispatch(getError("unknown error"));
               console.error(error)
           }
        }
    }
);

export const categoryAdded = createAsyncThunk (
    "categories/categoryAdded",
    async (category:Omit<Category,'_id'>,{ dispatch}) => {
        dispatch(getRequest());
        try {
            const response = await saveCategory(category);
            if (response) {
                dispatch(addCategorySuccess(response.data as Category));
                toast.success(`category was added`, { autoClose: 2500 });
            }
        }
        catch (error) {
            if (typeof  error === "string") {
                toast.warning(`${error}`, {autoClose: 2500});
                dispatch(getError(error));
            }
            else {
                dispatch(getError("unknown error"));
                console.error(error)
            }
        }
    }
);

export const categoryUpdated = createAsyncThunk(
    "categories/categoriesUpdated",
    async (category:Category,{ dispatch}) => {
        dispatch(getRequest());
        try {
            const {_id, name} = category;
            const response = await updateCategory(_id, {name});
            if (response) {
                dispatch(updateCategorySuccess(response.data));
                toast.success(`Category was updated`, {autoClose: 2500});
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
