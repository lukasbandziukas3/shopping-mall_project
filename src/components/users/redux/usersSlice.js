import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    status: "idle",
    err: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        getRequest: (state) => {
            state.status = 'loading';
        },
        getAllUsersSuccess: (state, action) => {
            state.status = "succeeded";
            state.users = action.payload;
        },
        updateUserSuccess: (state, action) => {
            state.status = "succeeded";
            const { _id, nickName, roles, activeStatus } = action.payload;
            const existingUser = state.users.find(
                (user) => user._id === _id
            );
            if (existingUser) {
                existingUser.nickName= nickName;
                existingUser.roles = roles;
                existingUser.activeStatus = activeStatus;
            }
        },
        deleteUserSuccess: (state, action) => {
            state.status = "succeeded";
            const {_id} = action.payload;
            state.users = state.users.filter((user)=> user._id !== _id);
        },
        getError: (state, action) => {
            state.status = "failed";
            state.err = action.payload;
        },
    },
});

export const {
    getAllUsersSuccess,
    updateUserSuccess,
    deleteUserSuccess,
    getRequest,
    getError
} = usersSlice.actions;

export default usersSlice.reducer;
