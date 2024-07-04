import {useDispatch, useSelector} from "react-redux";
import {
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
} from "@mui/material";
import {userDeleted} from "./redux/thunk";

export const UsersTable =({onUpdate}) => {
    const dispatch = useDispatch();
    const onDelete = (e) => {
      dispatch(userDeleted(e.target.getAttribute("data-user-id")));
    }
    const users = useSelector((state) => state.users.users);
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={4}>
                            User List
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: "flex" }}>
                        <TableCell sx={{ flex: 1 }}>NickName</TableCell>
                        <TableCell sx={{ flex: 2 }}>Roles </TableCell>
                        <TableCell sx={{ flex: 1 }}>Status</TableCell>
                        <TableCell sx={{ flex: 2 }} align="center">
                            Edit
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user._id} sx={{ display: "flex" }}>
                            <TableCell sx={{ flex: 1 }}>{user.nickName}</TableCell>
                            <TableCell sx={{ flex: 2 }}>{user.roles.join(", ")}</TableCell>
                            <TableCell sx={{ flex: 1 }}>{user.activeStatus ? '✅' : '❌' }</TableCell>
                            <TableCell sx={{ flex: 2 }} align="center">
                                <Button
                                    data-user-id={user._id}
                                    variant="contained"
                                    onClick = {onUpdate}
                                >
                                    edit
                                </Button>
                                <Button
                                    sx= {{ml: 2}}
                                    color = 'error'
                                    data-user-id={user._id}
                                    variant="contained"
                                    onClick = {onDelete}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
