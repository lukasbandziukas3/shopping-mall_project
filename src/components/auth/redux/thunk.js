import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    sendLogin,
    sendLogout, signUp,
} from "../../../services/auth";
import { toast } from 'react-toastify';
import {getAuthSuccess, getError, getLogoutSuccess, getRequest} from "./authSlice";
import {jwtDecode} from "jwt-decode";

export const userLogin = createAsyncThunk(
    "auth/Login",
    async (userData, { dispatch, getState }) => {
        dispatch(getRequest());
        try {
            const response = await sendLogin(userData);
            if (response.data) {
                localStorage.setItem("jwtToken", response.data.accessToken);
                const decodedToken = jwtDecode(response.data.accessToken);
                dispatch(getAuthSuccess(decodedToken));
            }
        } catch (error) {
            toast.warning(`${error}`, {autoClose: 2500});
            dispatch(getError(error));
        }
    }
);

export const userSignUp = createAsyncThunk(
    "auth/SignUp",
    async (userData, { dispatch, getState }) => {
        dispatch(getRequest());
        try{
            const response = await signUp(userData);
            if (response.data) {
                localStorage.setItem("jwtToken", response.data.accessToken);
                const decodedToken = jwtDecode(response.data.accessToken);
                dispatch(getAuthSuccess(decodedToken));
            }
        } catch (error) {
            toast.warning(`${error}`, { autoClose: 2500 });
            dispatch(getError(error));
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