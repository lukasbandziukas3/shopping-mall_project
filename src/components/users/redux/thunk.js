import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllUsers,
    saveUser,
    updateUser,
    deleteUser
} from "../../../services/users";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (param, { dispatch, getState }) => {
        const response = await getAllUsers();
        return response.data;
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
    async (user) => {
        const { userID, userData } = user;
        const response = await updateUser(userID, userData);
        return response.data;
    }
);

export const userDeleted = createAsyncThunk(
    "users/userDeleted",
    async (userId) => {
        const response = await deleteUser(userId);
        return response.data;
    }
);
