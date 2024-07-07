import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    status: "idle",
    err: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.status = 'loading';
        },
        getLogoutSuccess: (state, action) => {
            state.status = "succeeded";
            state.token = null;
        },
        getAuthSuccess: (state, action) => {
            state.status = "succeeded";
            state.token = action.payload.accessToken;
        },
        getError: (state, action) => {
            state.status = "failed";
            state.err = action.payload;
        }},
})

export const {
               getRequest,
               getLogoutSuccess,
               getAuthSuccess,
               getError
} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
