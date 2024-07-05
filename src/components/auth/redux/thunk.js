import { createAsyncThunk } from "@reduxjs/toolkit";
import {
 sendLogin,
} from "../../../services/auth";

export const userLogin = createAsyncThunk(
    "auth/authorization",
    async (userData, thunkAPI) => {
       try{
        const response = await sendLogin(userData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
       }
    }
);