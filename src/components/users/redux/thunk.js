import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllUsers,
    saveUser,
    updateUser,
    deleteUser
} from "../../../services/users";
import {toast} from "react-toastify";
import {deleteUserSuccess, getAllUsersSuccess, getError, getRequest, updateUserSuccess} from "./usersSlice";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (param, { dispatch, getState }) => {
        dispatch(getRequest());
        try {
            const response = await getAllUsers();
            if (response.data) {
                dispatch(getAllUsersSuccess(response.data));
            }
        } catch (error) {
            toast.warning(`${error}`, {autoClose: 2500});
            dispatch(getError(error));
        }
    }
);

export const userAdded = createAsyncThunk(
    "users/userAdded",
    async (user) => {
        const response = await saveUser(user);
        return response.data;
    }
);

export const userUpdated = createAsyncThunk(
    "users/userUpdated",
    async (user,{ dispatch, getState }) => {
        dispatch(getRequest());
        try {
            const {userID, userData} = user;
            const response = await updateUser(userID, userData);
            if (response.data) {
                toast.success(`user was updated`, { autoClose: 2500 });
                dispatch(updateUserSuccess(response.data));
            }
        } catch (error) {
            toast.warning(`${error}`, {autoClose: 2500});
            dispatch(getError(error));
        }
    }
);

export const userDeleted = createAsyncThunk(
    "users/userDeleted",
    async (userId,{ dispatch, getState }) => {
        dispatch(getRequest());
        try {
            const response = await deleteUser(userId);
            if (response.data) {
                toast.success(`user was deleted`, {autoClose: 2500});
                dispatch(deleteUserSuccess(response.data));
            }
       } catch (error) {
            toast.warning(`${error}`, {autoClose: 2500});
            dispatch(getError(error));
        }
   }
);
