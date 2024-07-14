import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "idle",
    roles: [],
    userName:"",
    activeStatus: false,
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
            state.status = "idle";
            state.userName = '';
            state.roles = [];
        },
        getAuthSuccess: (state, action) => {
            state.status = "succeeded";
            const { roles, nickName} = action.payload.UserInfo;
            state.userName = nickName;
            state.roles = roles;
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
               getError,
} = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
