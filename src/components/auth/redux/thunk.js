import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    sendLogin,
    sendLogout,
} from "../../../services/auth";
import { toast } from 'react-toastify';
import {getAuthSuccess, getError, getLogoutSuccess, getRequest} from "./authSlice";

export const userLogin = createAsyncThunk(
    "auth/authorization",
    async (userData, { dispatch, getState }) => {
       dispatch(getRequest());
       try{
        const response = await sendLogin(userData);
           if (response.data) {
               localStorage.setItem("jwtToken", response.data.accessToken);
               dispatch(getAuthSuccess());
           }
    } catch (error) {
           dispatch(getError(error.response.statusText));
       }
    }
);

export const userLogout = createAsyncThunk(
    "auth/logout",
    async (data, { dispatch, getState }) => {
       try {
           dispatch(getRequest());
           await sendLogout();
           localStorage.removeItem("jwtToken");
           dispatch(getLogoutSuccess());
       }
       catch (error) {
           toast.warning(`${error}`, { autoClose: 2500 });
           dispatch(getError(error));
       }
    }
);