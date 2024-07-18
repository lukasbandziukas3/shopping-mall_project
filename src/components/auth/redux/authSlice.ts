import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BaseState, Roles, TokenInfo} from "../../../interfaces/globalTypes";

export interface AuthState extends BaseState{
    roles: Roles[],
    userName: string,
}

const initialState: AuthState = {
    status: "idle",
    roles: [],
    userName:"",
    err: null,
};

 const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.status = 'loading';
        },
        getLogoutSuccess: (state) => {
            state.status = "idle";
            state.userName = '';
            state.roles = [];
        },
        getAuthSuccess: (state, action: PayloadAction<TokenInfo>) => {
            state.status = "succeeded";
            const { roles, nickName} = action.payload.UserInfo;
            state.userName = nickName;
            state.roles = roles;
        },
        getError: (state, action: PayloadAction<string>) => {
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

