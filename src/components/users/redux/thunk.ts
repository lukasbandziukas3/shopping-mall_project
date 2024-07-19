import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllUsers,
    updateUser,
    deleteUser
} from "../../../services/users";
import {toast} from "react-toastify";
import {deleteUserSuccess, getAllUsersSuccess, getError, getRequest, updateUserSuccess} from "./usersSlice";
import {User} from "../../../interfaces/globalTypes";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_param, { dispatch }) => {
        dispatch(getRequest());
        try {
            const response = await getAllUsers();
            if (response.data) {
                dispatch(getAllUsersSuccess(response.data));
            }
        } catch (error) {
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

export const userUpdated = createAsyncThunk(
    "users/userUpdated",
    async (user: User,{ dispatch }) => {
        dispatch(getRequest());
        try {
            const {_id, ...userData} = user;
            const response = await updateUser(_id, userData);
            if (response.data) {
                toast.success(`user was updated`, { autoClose: 2500 });
                dispatch(updateUserSuccess(response.data));
            }
        } catch (error) {
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

export const userDeleted = createAsyncThunk(
    "users/userDeleted",
    async (userId:string,{ dispatch }) => {
        dispatch(getRequest());
        try {
            const response = await deleteUser(userId);
            if (response.data) {
                toast.success(`user was deleted`, {autoClose: 2500});
                dispatch(deleteUserSuccess(response.data));
            }
       } catch (error) {
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
