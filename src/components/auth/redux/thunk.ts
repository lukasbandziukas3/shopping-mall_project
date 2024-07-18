import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    sendLogin,
    sendLogout, signUp,
} from "../../../services/auth";
import { toast } from 'react-toastify';
import {getAuthSuccess, getError, getLogoutSuccess, getRequest} from "./authSlice";
import {jwtDecode} from "jwt-decode";
import {Login, SingnUp, TokenInfo} from "../../../interfaces/globalTypes";

export const userLogin = createAsyncThunk(
    "auth/Login",
    async (userData:Login, { dispatch }) => {
        dispatch(getRequest());
        try {
            const response = await sendLogin(userData);
            if (response.data) {
                localStorage.setItem("jwtToken", response.data.accessToken);
                const decodedToken = jwtDecode<TokenInfo>(response.data.accessToken);
                dispatch(getAuthSuccess(decodedToken));
            }
        } catch (error) {
            if (typeof  error === "string") {
                toast.warning(`${error}`, {autoClose: 2500});
                dispatch(getError(error));
            }
            else{
                console.error(error)
            }
        }
    }
);

export const userSignUp = createAsyncThunk(
    "auth/SignUp",
    async (userData: SingnUp, { dispatch }) => {
        dispatch(getRequest());
        try{
            const response = await signUp(userData);
            if (response.data) {
                localStorage.setItem("jwtToken", response.data.accessToken);
                const decodedToken = jwtDecode<TokenInfo>(response.data.accessToken);
                dispatch(getAuthSuccess(decodedToken));
            }
        } catch (error) {
            if (typeof  error === "string") {
                toast.warning(`${error}`, {autoClose: 2500});
                dispatch(getError(error));
            }
            else{
                console.error(error)
            }
        }
    }
);

export const userLogout = createAsyncThunk(
    "auth/logout",
    async (_data, { dispatch }) => {
       try {
           dispatch(getRequest());
           await sendLogout();
           localStorage.removeItem("jwtToken");
           dispatch(getLogoutSuccess());
       }
       catch (error) {
           if (typeof  error === "string") {
               toast.warning(`${error}`, {autoClose: 2500});
               dispatch(getError(error));
           }
       }
    }
);