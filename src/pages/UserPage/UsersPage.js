import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Box} from "@mui/material";
import {CustomProgress} from "../../components/shared/CustomProgress";
import {fetchUsers} from "../../components/users/redux/thunk";
import {UsersList} from "../../components/users/UserList";

export default function UsersPage() {
    const status = useSelector((state) => state.users.status);
    const dispatch = useDispatch();
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);
    let content
    if (status === "loading" || status === "idle") {
        content = <CustomProgress/>
    }
    else{
        content = <UsersList />
    }
    return ( <Box>
            {content}
        </Box>
    );
}