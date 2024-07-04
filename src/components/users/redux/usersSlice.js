import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, userAdded, userUpdated, userDeleted } from "./thunk";
import {toast} from "react-toastify";

const initialState = {
    users: [],
    status: "idle",
    err: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
            })
            .addCase(userAdded.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(userAdded.fulfilled, (state, action) => {
                toast.success('user was added', { autoClose: 2500 });
                state.status = "succeeded";
                state.users.push(action.payload);
            })
            .addCase(userAdded.rejected, (state, action) => {
                toast.warning(`ups error`, { autoClose: 2500 });
                state.status = "failed";
            })
            .addCase(userUpdated.pending, (state, action) => {
                toast.success('user was updated', { autoClose: 2500 });
                state.status = "loading";
            })
            .addCase(userUpdated.fulfilled, (state, action) => {
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
            })
            .addCase(userUpdated.rejected, (state, action) => {
                toast.warning(`ups error`, { autoClose: 2500 });
                state.status = "failed";
            })
            .addCase(userDeleted.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(userDeleted.fulfilled, (state, action) => {
                toast.success('user was deleted', { autoClose: 2500 });
                state.status = "succeeded";
                const {_id} = action.payload;
                state.users = state.users.filter((user)=> user._id !== _id);
            })
            .addCase(userDeleted.rejected, (state, action) => {
                toast.warning(`ups error`, { autoClose: 2500 });
                state.status = "failed";
            })
    },
});

export default usersSlice.reducer;
