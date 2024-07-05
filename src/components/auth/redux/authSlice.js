import { createSlice } from "@reduxjs/toolkit";
import {userLogin} from "./thunk";

const initialState = {
    token: null,
    status: "idle",
    err: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(userLogin.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = "succeeded";
                const { accessToken } = action.payload;
                state.token = accessToken;

            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = "failed";
                state.err = action.payload?.message;
            })
    },
})

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
