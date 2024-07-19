import {ReactElement, ReactNode, useEffect} from "react";
import {Box} from "@mui/material";
import {CustomProgress} from "../../components/shared/CustomProgress";
import {fetchUsers} from "../../components/users/redux/thunk";
import {UsersList} from "../../components/users/UserList";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooksTS";

export default function UsersPage():ReactElement {
    const status = useAppSelector((state) => state.users.status);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);
    let content: ReactNode;
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